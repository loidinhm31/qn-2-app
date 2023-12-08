import { Component, OnInit } from "@angular/core";
import { StorageService } from "./shared/services/storage/storage.service";

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

  constructor(private storage: StorageService) {
  }

  async ngOnInit(): Promise<void> {
    await this.storage.init();
  }
}
