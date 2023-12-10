import { Component, Input } from "@angular/core";
import { InputModalComponent } from "./input-modal/input-modal.component";
import { ModalController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"],
})
export class CardItemComponent {
  @Input() cardTitle: string | undefined;
  @Input() routerTo: string | undefined;
  @Input() relativeTo: ActivatedRoute | undefined;

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) {
  }

  async openType() {
    if (this.routerTo?.includes("items")) {
      this.router.navigate([this.routerTo]);
    } else {
      this.openModal()
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: InputModalComponent,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      this.router.navigate([this.routerTo]);
    }
  }
}
