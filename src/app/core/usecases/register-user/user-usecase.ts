import { Injectable } from '@angular/core';
import { UserData } from '../../entities/ports/user-data';
import { UserRepository } from '../ports/user-repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterUserUseCase implements UserRepository {

    constructor(private userRepo: UserRepository) { }

    signUp(userData: UserData): Observable<UserData> {
        return this.userRepo.signUp({ name: userData.name, email: userData.email, password: userData.password })
    }

    signIn(email: string, password: string): Observable<UserData> {
        return this.userRepo.signIn(email, password);
    }

    getUserById(id: number): Observable<UserData> {
        return this.userRepo.getUserById(id)
    }
}