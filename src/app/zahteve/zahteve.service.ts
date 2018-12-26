import { Injectable } from '@angular/core';
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class ZahteveService {

  constructor(private http: HTTP) {}

  najnovejsi(page) {
    return this.http.get("https://dk.um.si/ajax.php?cmd=getSearch&source=dk&query=&page=" + page + "&pageSize=15", {}, {});
  }

  iskanje(niz, stran) {
    return this.http.get("https://dk.um.si/ajax.php?cmd=getSearch&source=dk&query=" + niz + "&page=" + stran + "&pageSize=15", {}, {});
  }

  dobiPoId(id) {
    return this.http.get(
      "https://dk.um.si/ajax.php?cmd=getDocument&gID=" +
        id,
      {},
      {}
    );
  }

  dobiDatoteko(id) {
    return this.http.get(
      "https://dk.um.si/ajax.php?cmd=getDoc&gID=" +
        id,
      {},
      {}
    );
  }

  brskanje(niz1, niz2, niz3, stran) {
    return this.http.get("https://dk.um.si/ajax.php?cmd=getBrowse&cat1=" + niz1 + "&cat2=" + niz2 + "&cat3=" + niz3 + "&page=" + stran, {}, {});
    }


}
