import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { authGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "sessions",
    canActivate: [authGuard],
    loadChildren: () => import("./pages/session/session.module").then(m => m.SessionPageModule),
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginPageModule),
  },
  {
    path: "account",
    loadChildren: () => import("./pages/account/account.module").then(m => m.AccountPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
