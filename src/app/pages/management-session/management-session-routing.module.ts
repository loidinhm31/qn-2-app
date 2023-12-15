import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ManagementSessionPage } from "./management-session.page";

const routes: Routes = [
  {
    path: "",
    component: ManagementSessionPage,
  },
  {
    path: ":id",
    loadChildren: () => import("./management-session-item/management-session-item.module").then(m => m.ManagementSessionItemPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementSessionPageRoutingModule {
}
