import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttp implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let myHeader:any={token:localStorage.getItem('eToken')};
    let modifiedReq = req.clone({
      setHeaders: myHeader
    });

  
    console.log('Intercepted request:', modifiedReq);

    
    return next.handle(modifiedReq);
  }
}
