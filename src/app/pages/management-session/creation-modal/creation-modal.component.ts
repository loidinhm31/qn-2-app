import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-creation-modal",
  templateUrl: "./creation-modal.component.html",
  styleUrls: ["./creation-modal.component.scss"],
})
export class CreationModalComponent {
  sessionName: string | undefined;
  sessionKey: string | undefined;
  sessionOrder: number | undefined;

  constructor(private modalController: ModalController) {}

  cancel() {
    return this.modalController.dismiss(null, "cancel");
  }

  confirm() {
    return this.modalController.dismiss({
      sessionName: this.sessionName,
      sessionKey: this.sessionKey,
      sessionOrder: this.sessionOrder
    }, "confirm");
  }
}
