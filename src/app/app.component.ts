import { Component, OnInit } from "@angular/core";
import { StorageService } from "./shared/services/storage/storage.service";
import { AuthenticationService } from "./shared/services/authentication/authentication.service";
import { map, switchMap, take } from "rxjs/operators";
import { from } from "rxjs";

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

  isAuth: boolean = false;

  constructor(private storage: StorageService,
              protected authenticationService: AuthenticationService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.storage.init();

    this.authenticationService.user.subscribe((user) => {
      this.isAuth = !!user;

    })
  }

  async logout() {
    await this.authenticationService.onLogout();
  }
}
