import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })

export class SignInGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/users']);
            return false;
        }

        return true;
    }

}
