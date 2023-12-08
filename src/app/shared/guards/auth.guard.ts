import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { map, switchMap, take } from "rxjs/operators";

import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { from, Observable } from "rxjs";
import { LOGIN_PAGE } from "src/app/shared/constants/constant";
import { User } from "../models/user.model";

export const authGuard: CanActivateFn = ():
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  const checkAuthentication = async () => {
    const userData: User | null = await authService.loadUserData();
    return userData !== null;
  };

  return authService.user.pipe(
    take(1),
    switchMap(user => {
      const isAuth = !!user;
      if (isAuth) {
        return [true];
      } else {
        return from(checkAuthentication()).pipe(
          map(authenticated => authenticated ? true : router.createUrlTree([LOGIN_PAGE]))
        );
      }
    })
  );

};
