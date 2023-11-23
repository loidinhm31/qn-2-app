import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public appPages = [
    { title: "User", url: "/users", icon: "mail" },
    { title: "Session", url: "/sessions", icon: "paper-plane" },
  ];
  constructor() {}
}
