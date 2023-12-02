import { Component, OnInit } from "@angular/core";
import { InfiniteScrollCustomEvent } from "@ionic/angular";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  public title!: string;

  items: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.title = "Session";

    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 18; i++) {
      this.items.push(`Item ${count + i}`);
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
