import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SessionItemDetailPage } from "./session-item-detail.page";


const routes: Routes = [
  {
    path: "",
    component: SessionItemDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionItemDetailPageRoutingModule {
}
