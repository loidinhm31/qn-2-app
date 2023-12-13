import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CreationModalComponent } from "./creation-modal/creation-modal.component";
import { Session } from "../../shared/models/session.model";

@Component({
  selector: "app-management-session",
  templateUrl: "./management-session.page.html",
  styleUrls: ["./management-session.page.scss"],
})
export class ManagementSessionPage implements OnInit {
  public title!: string;

  items: Session[] = [];

  component = ManagementSessionPage;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    this.title = "Management Session";

    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 18; i++) {
      this.items.push({
        order: i,
        sessionName: `Session ${i}`,
        sessionKey: `session-${i}`,
      });
    }
  }

  async openCreateSessionModal() {
    const modal = await this.modalController.create({
      component: CreationModalComponent,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {

    }
  }
}
