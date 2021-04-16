import { Injectable } from '@angular/core';
import { UserData } from '../../core/entities/ports/user-data';

const credentialsKey = 'credentials';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private usuario: UserData;

    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

        if (savedCredentials) {
            this.usuario = JSON.parse(savedCredentials);
        }
    }

    isAuthenticated(): boolean {
        return !!this.credentials;
    }

    getCredentials() {
        return localStorage.getItem(credentialsKey);
    }

    removeCredentials() {
        localStorage.removeItem(credentialsKey);
    }


    hasCredentials() {
        return !!this.getCredentials();
    }

    get credentials(): UserData {
        return this.usuario;
    }

    set credentials(credentials: UserData) {
        this.usuario = credentials || null;

        if (credentials) {
            localStorage.setItem(credentialsKey, JSON.stringify(credentials));
        } else {
            localStorage.removeItem(credentialsKey);
        }
    }
}