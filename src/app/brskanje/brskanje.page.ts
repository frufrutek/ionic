import { Component } from '@angular/core';
import { ZahteveService } from "../zahteve/zahteve.service";

@Component({
  selector: 'app-brskanje',
  templateUrl: './brskanje.page.html',
  styleUrls: ['./brskanje.page.scss'],
})
export class BrskanjePage {
  public podatek:Array<Object>;
  public prvi:boolean = false;
  public drugi:boolean = false;
  public tretji:boolean = false;
  public cetrti:boolean = false;
  private sredni:string = "";
  private sredni2:string = "";
  private sredni3:string = "";
  public pokazi:boolean = false;
  stran:number = 1;

  constructor(private podatki:ZahteveService) { }

  ngOnInit() {
    this.podatki.brskanje("", "", "", 1).then(data =>{
        this.podatek = JSON.parse(data.data).cat1;
      });
      this.prvi = true;
  }

naslednja(niz1){
  let str = niz1;
  let n = str.indexOf(",");
  niz1  = str.slice(0,n);
    this.podatki.brskanje(niz1, "", "", 1).then(data =>{
        this.podatek = JSON.parse(data.data).cat2;
      });
    this.drugi = true;
    this.prvi = false;
    this.sredni = niz1;
}

naslednja2(niz2){
  if(this.sredni == "avtor" || this.sredni == "zaloznik"){
    let str2 = niz2;
    let m = str2.indexOf(",");
    niz2  = str2.slice(0,m);
    console.log(niz2 + "," + this.sredni);
      this.podatki.brskanje(this.sredni, niz2, "", 1).then(data =>{
          this.podatek = JSON.parse(data.data).cat3;
        });
      this.drugi = false;
      this.tretji = true;
      this.sredni2 = niz2;
  }else{
    let str2 = niz2;
    let m = str2.indexOf(",");
    niz2  = str2.slice(0,m);
    console.log(niz2 + "," + this.sredni);
      this.podatki.brskanje(this.sredni, niz2, "", 1).then(data =>{
          this.podatek = JSON.parse(data.data).results;
        });
      this.drugi = false;
      this.sredni2 = niz2;
      this.cetrti = true;
  }


}

naslednja3(niz3){
  let str3 = niz3;
  let n = str3.indexOf(",");
  niz3  = str3.slice(0,n);
    this.podatki.brskanje(this.sredni, this.sredni2, niz3, 1).then(data =>{
        this.podatek = JSON.parse(data.data).results;
      });
    this.cetrti = true;
    this.drugi = false;
    this.tretji = false;
    this.sredni3 = niz3;
}

infinite(infiniteScroll){
  setTimeout(() => {
  this.stran++;
  console.log(this.sredni + "," + this.sredni2 + "," + this.sredni3 + "," + this.stran);
  this.podatki.brskanje(this.sredni, this.sredni2, this.sredni3, this.stran).then(data =>{
    JSON.parse(data.data).results.map(data =>{
      this.podatek.push(data);
    })
    });
    infiniteScroll.target.complete();
}, 500);

}

}
