import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { InputModalComponent } from "../shared/input-modal/input-modal.component";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private modalController: ModalController) {}

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

  ngOnInit() {
    this.title = "Session";
  }
}
