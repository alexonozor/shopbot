import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('JWT-Token')
    
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
 
    if (request.url.indexOf('upload') === -1) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      request.headers.set('Accept', 'application/json')
      request = request.clone({ headers: request.headers });
    } else {
      // request = request.clone({ headers: request.headers.set('Content-Type', 'multipart/form-data') });
    }
    // request.headers.set('Accept', 'multipart/form-data')
    
    // request.headers.set('Accept', 'application/json')

    

    return next.handle(request);
  }

  constructor(private jwtService: JwtService) { }
}
