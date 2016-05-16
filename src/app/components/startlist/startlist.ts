import {Component} from "@angular/core";
import {CmaService} from "../../services/cma-service";

@Component({
  selector: 'info',
  templateUrl: 'app/components/startlist/startlist.html',
  styleUrls: ['app/components/startlist/startlist.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Startlist {

  constructor(private cmaService:CmaService) {

  }

  ngOnInit() {

  }
}
