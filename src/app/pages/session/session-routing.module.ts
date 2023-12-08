import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SessionPage } from "./session.page";
import { authGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: SessionPage,
  },
  {
    path: ":id",
    canActivate: [authGuard],
    loadChildren: () => import("./session-item/session-item.module").then(m => m.SessionItemPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionPageRoutingModule {}
