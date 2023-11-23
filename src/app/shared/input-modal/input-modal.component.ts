import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-input-modal",
  templateUrl: "./input-modal.component.html",
  styleUrls: ["./input-modal.component.scss"],
})
export class InputModalComponent {
  password: string | undefined;

  constructor(private modalController: ModalController) {
  }

  cancel() {
    return this.modalController.dismiss(null, "cancel");
  }

  confirm() {
    return this.modalController.dismiss(this.password, "confirm");
  }


}
