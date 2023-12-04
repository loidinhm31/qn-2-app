import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { map, take } from "rxjs/operators";

import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { Observable } from "rxjs";

export const authGuard: CanActivateFn = ():
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {

  const router = inject(Router);
  const authService = inject(AuthenticationService);

  return authService.user.pipe(
    take(1),
    map(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return router.createUrlTree(["/auth"]);
    }),
  );

};
