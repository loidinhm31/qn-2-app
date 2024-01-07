import { Component, ElementRef, OnInit } from "@angular/core";
import { StorageService } from "./shared/services/storage/storage.service";
import { AuthenticationService } from "./shared/services/authentication/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: "User", url: "/users", icon: "person" },
    { title: "Session", url: "/sessions", icon: "albums" },
    { title: "Management Session", url: "/management-session", icon: "file-tray-stacked" },
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
    });
  }

  async logout() {
    await this.authenticationService.onLogout();
  }
}
