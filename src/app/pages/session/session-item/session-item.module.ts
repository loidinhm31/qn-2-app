import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SessionItemPageRoutingModule } from "./session-item-routing.module";

import { SessionItemPage } from "./session-item.page";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CardItemModule } from "../../../shared/ui-components/card-item/card-item.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionItemPageRoutingModule,
    CardItemModule,
  ],
  declarations: [SessionItemPage],
})
export class SessionItemPageModule {
}
