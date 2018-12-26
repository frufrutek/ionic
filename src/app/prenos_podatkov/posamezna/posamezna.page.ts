import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ZahteveService } from "../../zahteve/zahteve.service";
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-posamezna',
  templateUrl: './posamezna.page.html',
  styleUrls: ['./posamezna.page.scss'],
})
export class PosameznaPage implements OnInit {
  private prejeti_id:string;
  public dat:string;
  public podatek:Array<Object>;
  public pripravljeno:boolean = false;
  public link:ZahteveService;
  constructor(private pot:ActivatedRoute, private zahteva:ZahteveService, private document:DocumentViewer, private datoteka: File, private transfer: FileTransfer, private obvestilo:AlertController, private obvestilo1:ToastController) { }

  doRefresh(refresher) {
    this.podatek = null;
    this.zahteva.dobiPoId(this.prejeti_id).then(data =>{
        this.podatek = JSON.parse(data.data);
        this.pripravljeno = true;
      });
      setTimeout(() => {
      refresher.target.complete();
    }, 500);
}

async presentToast(status) {
  if(status==1){
   const toast = await this.obvestilo1.create({
     message: 'Datoteka ni na voljo.',
     duration: 2000
   });
   toast.present();
   }
   if(status==2){
    const toast = await this.obvestilo1.create({
      message: 'Prenašanje datoteke ...',
      duration: 2000
    });
    toast.present();
    }
 }


odpriPDF(){
            let pot = null;
            pot = this.datoteka.dataDirectory;
            const transfer = this.transfer.create();
            transfer.download('https://dk.um.si/ajax.php?cmd=getDoc&gID=' + this.prejeti_id, pot + this.prejeti_id + '.pdf').then(entry => {
              let url = entry.toURL();
              this.document.viewDocument(url, 'application/pdf', {});
            })
            this.presentToast(2);
          }


  ngOnInit() {
    this.prejeti_id = this.pot.snapshot.paramMap.get("id");
    this.zahteva.dobiPoId(this.prejeti_id).then(data =>{
        this.podatek = JSON.parse(data.data);
        this.pripravljeno = true;
      });
}
}
