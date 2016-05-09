import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Home} from "./components/home/home";
import {About} from "./components/about/about";
import {RepoBrowser} from "./components/repo-browser/repo-browser";

@Component({
  selector: 'cma-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/cma-app.html',
})
@RouteConfig([
  {path: '/home', component: Home, name: 'Home', useAsDefault: true},
  {path: '/about', component: About, name: 'About'},
  {path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'},
])
export class CmaApp {

  constructor() {
  }

}
