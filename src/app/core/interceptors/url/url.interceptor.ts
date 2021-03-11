import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UrlInterceptor implements HttpInterceptor {
  private baseUrl: string = environment.baseUrl;

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      url: `${this.baseUrl}${request.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    return next.handle(req);
  }
}
