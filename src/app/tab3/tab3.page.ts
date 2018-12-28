import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public items: Array<Object> = [];
    public merged: Object;
    public id;
  constructor(private http:HTTP, private shramba:Storage){
  }


ngOnInit(){
this.shramba.forEach((id) => {
    this.items.push(id);
})
      }

      doRefresh(refresher) {
        this.items = [];
        this.ngOnInit();
        setTimeout(() => {
            refresher.target.complete();
          }, 2000);
    }


    delete(id){
      this.shramba.remove(id);
      this.doRefresh(Event);
    }
  }
