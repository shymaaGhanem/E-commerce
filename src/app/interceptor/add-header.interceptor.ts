import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  let token:any=localStorage.getItem('userToken')
  // let modifiedRquest =request.clone({
  // headers:request.headers.set('token',token)
  // })
  
//  let modifiedReq= request.clone({
//   headers:request.headers.set('token',token)
//   })
//   console.log(modifiedReq)
  
  
    return next.handle(request);
  }
}
