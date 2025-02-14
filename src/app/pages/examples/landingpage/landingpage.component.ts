import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "app-landingpage",
    templateUrl: "landingpage.component.html",
    standalone: false
})
export class LandingpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
