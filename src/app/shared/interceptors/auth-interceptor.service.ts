import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mongoAtlasRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });

    // if (req.url.includes('/api/') && !req.headers.has('Authorization') && token) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Token ${token}`,
    //     },
    //   });
    // }
    return next.handle(req);
  }
}
