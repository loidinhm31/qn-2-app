import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { map } from "rxjs/operators";

import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { from, Observable } from "rxjs";
import { LOGIN_PAGE } from "src/app/shared/constants/constant";

export const authGuard: CanActivateFn = ():
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  return from(authService.isAuthenticate()).pipe(
    map(
      authenticated => authenticated ? true : router.createUrlTree([LOGIN_PAGE]),
    ),
  );
};
