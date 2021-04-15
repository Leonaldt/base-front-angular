import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate() {
        return this.isTheUserAuthenticated();
    }

    canActivateChild() {
        return this.isTheUserAuthenticated();
    }

    isTheUserAuthenticated() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/login', { replaceUrl: true });
            return false;
        }

        return true;
    }
}