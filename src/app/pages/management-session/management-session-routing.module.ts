import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ManagementSessionPage } from "./management-session.page";

const routes: Routes = [
  {
    path: "",
    component: ManagementSessionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementSessionPageRoutingModule {
}
