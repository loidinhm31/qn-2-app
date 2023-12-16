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
  currentPage: number | undefined;
  itemsPerPage: number | undefined;
  totalItems: number | undefined;
  sessionId: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = `Session ${params["id"]}`;
      this.sessionId = params["id"];
    });

    this.title = `Management Session ${this.sessionId}`;

    this.currentPage = 1;
    this.itemsPerPage = 18;
    this.totalItems = 90;

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

  onPageChanged(page: number): void {
    this.currentPage = page;
  }
}
