import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CmaService {

  constructor(private http:Http) {
  }

  getForanmalda(name:string) {
    return this.http.get(`http://localhost:8080/cma/rest/foranmald`).map((res) => res.json());
  }

  getStartlist() {
    return this.http.get(`http://localhost:8080/cma/rest/start`).map((res) => res.json());
  }

  getResultlist(gender:string, clazz:string) {
    return this.http.get(`http://localhost:8080/cma/rest/resultatlista`).map((res) => res.json());
  }

  getEgenskaper() {
    return this.http.get(`http://localhost:8080/cma/rest/egenskaper`).map((res) => res.json());
  }
}
