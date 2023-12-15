import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagementSessionItemPageRoutingModule } from "./management-session-item-routing.module";

import { ManagementSessionItemPage } from "./management-session-item.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementSessionItemPageRoutingModule
  ],
  declarations: [ManagementSessionItemPage]
})
export class ManagementSessionItemPageModule {}
