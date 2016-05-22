import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Home} from "./components/home/home";
import {About} from "./components/about/about";
import {RepoBrowser} from "./components/repo-browser/repo-browser";
import {Info} from "./components/info/info";
import {Foranmalda} from "./components/foranmalda/foranmalda";
import {Startlist} from "./components/startlist/startlist";
import {Resultlist} from "./components/resultlist/resultlist";

@Component({
  selector: 'cma-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/cma-app.html',
  styleUrls: ['app/cma-app.css']
})
@RouteConfig([
  {path: '/home', component: Home, name: 'Home', useAsDefault: true},
  {path: '/info', component: Info, name: 'Info'},
  {path: '/foranmalda', component: Foranmalda, name: 'Foranmalda'},
  {path: '/startlist', component: Startlist, name: 'Startlist'},
  {path: '/resultlist', component: Resultlist, name: 'Resultlist'},
  {path: '/about', component: About, name: 'About'},
  {path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'},
])
export class CmaApp {

  constructor() {
  }

}
