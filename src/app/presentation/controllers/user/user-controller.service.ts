import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { UserRepository } from 'src/app/core/usecases/ports/user-repository';
import { RegisterUserUseCase } from 'src/app/core/usecases/register-user/user-usecase';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService implements UserRepository {

  constructor(private registerUser: RegisterUserUseCase) { }

  signUp(user: UserData): Observable<UserData> {
    return from(this.registerUser.signUp(user))
  }

  signIn(email: string, password: string): Observable<UserData> {
    return this.registerUser.signIn(email, password);
  }

  getUserById(id: number): Observable<UserData> {
    return from(this.registerUser.getUserById(id))
  }
}