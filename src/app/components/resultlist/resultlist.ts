import {Component} from "@angular/core";
import {CmaService} from "../../services/cma-service";

@Component({
  selector: 'info',
  templateUrl: 'app/components/resultlist/resultlist.html',
  styleUrls: ['app/components/resultlist/resultlist.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Resultlist {

  constructor(private cmaService:CmaService) {

  }

  ngOnInit() {

  }
}
