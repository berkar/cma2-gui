import {Component, OnInit} from "@angular/core";
import {CmaService} from "../../services/cma-service";
import {Foranmald} from "../../model";


@Component({
  selector: 'info',
  templateUrl: 'app/components/foranmalda/foranmalda.html',
  styleUrls: ['app/components/foranmalda/foranmalda.css'],
  providers: [CmaService],
  directives: [],
  pipes: []
})
export class Foranmalda implements OnInit {

  foranmalda:Foranmald[];

  constructor(private cmaService:CmaService) {
  }

  ngOnInit() {
    this.cmaService.getForanmalda(null).subscribe(
      foranmalda => this.foranmalda = foranmalda,
      error => console.error('Error: ' + error),
      () => console.log('Föranmälda Completed!')
    );
  }
}
