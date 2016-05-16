import {Component} from "@angular/core";
import {Http} from "@angular/http";


@Component({
  selector: 'info',
  templateUrl: 'app/components/info/info.html',
  styleUrls: ['app/components/info/info.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Info {

  constructor(http:Http) {

  }

  ngOnInit() {

  }
}
