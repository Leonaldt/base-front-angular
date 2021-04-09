import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { UserUseCase } from 'src/app/core/usecases/register-user/register-user';
import { RegisterUser } from 'src/app/core/usecases/ports/register-user';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService implements RegisterUser {

  constructor(private registerUser: UserUseCase) { }

  register(user: UserData): Observable<UserData> {
    return this.registerUser.register(user);
  }

  login(param: UserData): Observable<UserData> {
    return this.registerUser.login(param);
  }

  logout(): Observable<boolean> {
    return this.logout();
  }

}