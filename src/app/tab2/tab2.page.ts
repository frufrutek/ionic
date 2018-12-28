import { Component } from '@angular/core';
import { ZahteveService } from "../zahteve/zahteve.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page { //takoj za tem lahko daš spremenljivke
  niz = ""
  stran:number = 1
  odstrani:boolean = true;
  odstrani1:boolean = true;
  public podatek:Array<Object>;
  public podatek_shrani:Array<Object>;

  constructor(private podatki: ZahteveService, private shramba: Storage) {}

  doRefresh(refresher) {
    this.odstrani1 = true;
      setTimeout(() => {
      refresher.target.complete();
    }, 0);
}


  ngOnInit() {
    if(this.niz != ""){
      this.odstrani = false;
      this.odstrani1 = false;
      this.podatki.iskanje(this.niz, 1).then(data =>{
          this.podatek = JSON.parse(data.data).results;
        });
      }
    }

    infinite(infiniteScroll){
      setTimeout(() => {
      this.stran++;
      this.podatki.iskanje(this.niz, this.stran).then(data =>{
        JSON.parse(data.data).results.map(data =>{
          this.podatek.push(data);
        })
        });
        infiniteScroll.target.complete();
    }, 500);

}

  favorite(id){
    this.podatek_shrani = [];
    this.podatki.dobiPoId(id).then(data =>{
        this.podatek_shrani = JSON.parse(data.data);
      });
    console.log("ID: " + id + " Podatki: " + this.podatek_shrani);
    this.shramba.set(id, this.podatek_shrani);
  }
  }
