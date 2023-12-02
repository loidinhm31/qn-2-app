import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SessionItemPage } from "./session-item.page";

const routes: Routes = [
  {
    path: "",
    component: SessionItemPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionItemPageRoutingModule {}
