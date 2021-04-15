import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log('canActivate')

        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/login', { replaceUrl: true });
            return false;
        }

        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log('canActivateChild')

        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/login', { replaceUrl: true });
            return false;
        }

        return true;
    }
}