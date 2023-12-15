import { Component, OnInit } from "@angular/core";
import { SessionItem } from "../../../shared/models/session.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-management-session-item",
  templateUrl: "./management-session-item.page.html",
  styleUrls: ["./management-session-item.page.scss"],
})
export class ManagementSessionItemPage implements OnInit {
  public title!: string;

  items: SessionItem[] = [];

  sessionId: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = `Session ${params["id"]}`;
      this.sessionId = params["id"];
    });

    this.title = `Management Session ${this.sessionId}`;

    this.generateItems();
  }

  private generateItems() {
    for (let i = 0; i < 18; i++) {
      this.items.push({
        id: `${i}`,
        title: `Item ${i}`,
        extension: `unknown`,
        sessionId: this.sessionId!,
      });
    }
  }

}
