import { Component, OnInit } from "@angular/core";
import { InfiniteScrollCustomEvent } from "@ionic/angular";
import { ActivatedRoute, Params } from "@angular/router";
import { SessionItem } from "src/app/shared/models/session.model";

@Component({
  selector: "app-session-item",
  templateUrl: "./session-item.page.html",
  styleUrls: ["./session-item.page.scss"],
})
export class SessionItemPage implements OnInit {
  public title!: string;

  public routerTo!: string;

  items: SessionItem[] = [];

  sessionId: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.generateItems();
    this.route.params.subscribe((params: Params) => {
      this.title = `Session ${params["id"]}`;
      this.sessionId = params["id"];
      this.routerTo = `sessions/${params["id"]}/items/`;
    });

  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 18; i++) {
      this.items.push({
        id: `${i}`,
        title: `Item ${i}`,
        extension: `unknown`,
        sessionId: this.sessionId!
      });
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }


}
