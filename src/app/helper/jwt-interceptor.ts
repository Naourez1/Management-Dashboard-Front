import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageServiceService } from '../authentication/token-storage-service.service';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private authenticationService: AuthenticationServiceService, private tokenStorageService: TokenStorageServiceService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authReq = request;
        const token = this.tokenStorageService.getToken();
        if (token != null) {
            authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
}
