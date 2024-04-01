import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const token = localStorage.getItem('userToken');
    
    let baseUrlDev='https://154.41.228.234:3000';

    const baseUrl: string =`${baseUrlDev}/api/v0/portal/`;

  
   console.log(baseUrl);
   
    let Headers = request.clone({
      url: baseUrl + request.url,
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
   
   
   
   
   
   
    return next.handle(request);
  }
}
