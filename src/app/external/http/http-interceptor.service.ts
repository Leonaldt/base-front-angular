import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.getCredentials())
            request = request.clone({ setHeaders: { 'Authorization': `Bearer ${this.authService.credentials.token}` } });

        return next.handle(request).pipe(catchError(response => this.errorHandler(response)));
    }

    private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
        switch (response.status) {
            case 400:
                console.log('Error', response.status);
                break;
            case 401:
                console.log('401 - Não Autorizado.');
                this.authService.credentials = null;
                this.router.navigateByUrl('/login', { replaceUrl: true });
                break;
            case 404:
                console.log('404 - O recurso requisitado não existe.');
                break;
            case 406:
            case 409:
            case 500:
                console.log('500 - Ocorreu um erro inesperado no servidor.');
                break;
        }
        return throwError(response);
    }
}