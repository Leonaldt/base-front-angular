import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { UserUseCase } from 'src/app/core/usecases/register-user/register-user';
import { UserRepository } from 'src/app/core/usecases/ports/user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService implements UserRepository {

  constructor(private registerUser: UserUseCase) { }

  signUp(user: UserData): Observable<UserData> {
    return this.registerUser.signUp(user);
  }

  login(email: string, password: string): Observable<UserData> {
    return this.registerUser.login(email, password);
  }

  logout(): Observable<boolean> {
    return this.registerUser.logout();
  }

}