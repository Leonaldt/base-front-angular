import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { RegisterUserUseCase } from 'src/app/core/usecases/register-user/register-user';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private registerUser: RegisterUserUseCase) { }

  register(user: UserData): Observable<UserData> {
    return this.registerUser.register(user);
  }
}