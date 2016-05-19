import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {FORANMALDA, STARTLIST, RESULTLIST, EGENSKAPER} from "./mocks";

@Injectable()
export class CmaService {

  constructor(private http:Http) {
  }

  static getForanmalda(name:string) {
    return Promise.resolve(FORANMALDA);
  }

  static getStartlist() {
    return Promise.resolve(STARTLIST);
  }

  static getResultlist() {
    return Promise.resolve(RESULTLIST);
  }

  getEgenskaper() {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `http://localhost:8080/cma/rest/egenskaper`;
    // console.log(this.http.get(url, {search: params}));
    // console.log(this.http.get(url, {search: params}).map((res) => res.json()));
    // return this.http.get(url, {search: params}).map((res) => res.json());
    return EGENSKAPER;
  }
}
