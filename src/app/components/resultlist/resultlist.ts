import {Component, OnInit} from "@angular/core";
import {CmaService} from "../../services/cma-service";
import {Resultat} from "../../model";

@Component({
  selector: 'info',
  templateUrl: 'app/components/resultlist/resultlist.html',
  styleUrls: ['app/components/resultlist/resultlist.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Resultlist implements OnInit {

  resultlist:Resultat[];

  constructor(private cmaService:CmaService) {
  }

  ngOnInit() {
    this.cmaService.getResultlist(null, null).subscribe(
      resultlist => this.resultlist = resultlist,
      error => console.error('Error: ' + error),
      () => console.log('Resultlista Completed!')
    );

  }
}
