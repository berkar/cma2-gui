import {Component} from "@angular/core";
import {CmaService} from "../../services/cma-service";


@Component({
  selector: 'info',
  templateUrl: 'app/components/foranmalda/foranmalda.html',
  styleUrls: ['app/components/foranmalda/foranmalda.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Foranmalda {

  constructor(private cmaService:CmaService) {

  }

  ngOnInit() {

  }
}
