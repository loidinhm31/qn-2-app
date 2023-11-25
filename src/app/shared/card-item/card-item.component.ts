import { Component, Input } from "@angular/core";
import { InputModalComponent } from "./input-modal/input-modal.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent   {
  @Input() cardTitle: string | undefined;

  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: InputModalComponent,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      console.log(data);
    }
  }

}
