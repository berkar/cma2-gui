import {Component, OnInit} from "@angular/core";
import {CmaService} from "../../services/cma-service";
import {Anmalan} from "../../model";


@Component({
  selector: 'info',
  templateUrl: 'app/components/foranmalda/foranmalda.html',
  styleUrls: ['app/components/foranmalda/foranmalda.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Foranmalda implements OnInit {

  foranmalda:Anmalan[];

  constructor(private cmaService:CmaService) {
  }

  ngOnInit() {
    CmaService.getForanmalda(null).then(foranmalda => this.foranmalda = foranmalda);
  }
}
