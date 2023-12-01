import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SessionPageRoutingModule } from "./session-routing.module";

import { SessionPage } from "src/app/session/session.page";
import { InputModalModule } from "src/app/shared/card-item/input-modal/input-modal.module";
import { CardItemModule } from "../shared/card-item/card-item.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SessionPageRoutingModule, InputModalModule, CardItemModule],
  declarations: [SessionPage],
})
export class SessionPageModule {}
