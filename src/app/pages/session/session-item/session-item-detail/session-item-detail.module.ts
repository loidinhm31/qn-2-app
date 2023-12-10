import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SessionItemDetailPageRoutingModule } from "./session-item-detail-routing.module";
import { SessionItemDetailPage } from "./session-item-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionItemDetailPageRoutingModule,
    YouTubePlayerModule,
  ],
  declarations: [SessionItemDetailPage],
})
export class SessionItemDetailPageModule {
}
