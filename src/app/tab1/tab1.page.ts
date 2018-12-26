import { Component } from '@angular/core';
import { ZahteveService } from "../zahteve/zahteve.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {
  public podatek:string;
  constructor(private podatki: ZahteveService, private shramba: Storage) {}

  doRefresh(refresher) {
    this.podatek = null;
    this.podatki.najnovejsi(1).then(data =>{
        this.podatek = JSON.parse(data.data).results;
      });
      setTimeout(() => {
      refresher.target.complete();
    }, 2000);
}

  ngOnInit() {

    this.podatki.najnovejsi(1).then(data =>{
        this.podatek = JSON.parse(data.data).results;
      });
}

favorite(id,naslov){
  console.log(id);
  console.log(naslov);
}

}
