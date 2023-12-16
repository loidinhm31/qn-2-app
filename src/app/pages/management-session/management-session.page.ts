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
  currentPage: number | undefined;
  itemsPerPage: number | undefined;
  totalItems: number | undefined;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    this.title = "Management Session";
    this.currentPage = 1;
    this.itemsPerPage = 18;
    this.totalItems = 52;

    this.generateItems();
  }

  private generateItems() {
    for (let i = 0; i < 18; i++) {
      this.items.push({
        id: `${i}`,
        order: i,
        sessionName: `Session ${i}`,
        sessionKey: `session-${i}`,
      });
    }
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
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
