import {Component, OnInit} from "@angular/core";
import {CmaService} from "../../services/cma-service";
import {Start} from "../../model";

@Component({
  selector: 'info',
  templateUrl: 'app/components/startlist/startlist.html',
  styleUrls: ['app/components/startlist/startlist.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Startlist implements OnInit {

  startlist:Start[];

  constructor(private cmaService:CmaService) {

  }

  ngOnInit() {
    CmaService.getStartlist().then(startlist => this.startlist = startlist);
  }
}
