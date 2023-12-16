import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ManagementSessionPageRoutingModule } from "./management-session-routing.module";

import { ManagementSessionPage } from "./management-session.page";
import { CreationModalModule } from "./creation-modal/creation-modal.module";
import { PaginationModule } from "../../shared/ui-components/pagination/pagination.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CreationModalModule,
    PaginationModule,
    ManagementSessionPageRoutingModule,
  ],
  declarations: [ManagementSessionPage],
})
export class ManagementSessionPageModule {
}
