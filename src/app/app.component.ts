import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./shared/services/authentication/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: "User", url: "/users", icon: "mail" },
    { title: "Session", url: "/sessions", icon: "paper-plane" },
  ];
  constructor(private authenticationService: AuthenticationService) {}

  async ngOnInit(): Promise<void> {
    await this.authenticationService.autoLogin();
  }
}
