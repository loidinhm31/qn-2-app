import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ManagementSessionItemPage } from "./management-session-item.page";

const routes: Routes = [
  {
    path: "",
    component: ManagementSessionItemPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementSessionItemPageRoutingModule {
}
