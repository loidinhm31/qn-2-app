import { Component, OnInit } from "@angular/core";
import { InfiniteScrollCustomEvent } from "@ionic/angular";
import { Session } from "../../shared/models/session.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  public title!: string;

  public routerTo = "sessions/";


  items: Session[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = "Session";

    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 18; i++) {
      this.items.push({
        id: `${i}`,
        order: i,
        sessionName: `Session ${i}`,
        sessionKey: `session-${i}`,
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
