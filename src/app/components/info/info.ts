import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Egenskaper} from "../../model";
import {CmaService} from "../../services/cma-service";


@Component({
  selector: 'info',
  templateUrl: 'app/components/info/info.html',
  styleUrls: ['app/components/info/info.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Info implements OnInit {

  egenskaper:Egenskaper;

  constructor(private http:Http, private cmaService:CmaService) {
  }

  ngOnInit() {
    this.cmaService.getEgenskaper().subscribe(
      egenskaper => this.egenskaper = egenskaper,
      error => console.error('Error: ' + error),
      () => console.log('Egenskaper Completed!')
    );
  }
}
