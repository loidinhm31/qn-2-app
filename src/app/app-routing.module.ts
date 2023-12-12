import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { authGuard } from "./shared/guards/auth.guard";
import { HOME_PAGE, LOGIN_PAGE, USER_PAGE } from "./shared/constants/constant";

const routes: Routes = [
  {
    path: "",
    redirectTo: LOGIN_PAGE,
    pathMatch: "full",
  },
  {
    path: HOME_PAGE,
    canActivate: [authGuard],
    loadChildren: () => import("./pages/session/session.module").then(m => m.SessionPageModule),
  },
  {
    path: LOGIN_PAGE,
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginPageModule),
  },
  {
    path: USER_PAGE,
    loadChildren: () => import("./pages/user/user.module").then(m => m.AccountPageModule),
  },
  {
    path: "management-session",
    loadChildren: () => import("./pages/management-session/management-session.module").then(m => m.ManagementSessionPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
