import { Injectable } from '@angular/core';
import { Either, left, right } from 'src/app/shared/either';
import { UseCase } from '../../base/usecase';
import { UserData } from '../../entities/ports/user-data';
import { RegisterUserResponse } from './register-user-response';
import { InvalidNameError } from '../../entities/errors/invalid-name'
import { InvalidEmailError } from '../../entities/errors/invalid-email'
import { User } from '../../entities/user/user'
import { UserRepository } from '../ports/user-repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserUseCase implements UserRepository {

    constructor(private userRepo: UserRepository) { }

    signUp(userData: UserData): Observable<UserData> {

        // const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(userData)

        // if (userOrError.isLeft()) {
        //     return left(userOrError.value)
        // }
        // console.log('User Use Case...!')

        // const user: User = userOrError.value
        // const resultUser = this.userRepo.register({ name: user.name.value, email: user.email.value })

        // console.log('resultUser: ', resultUser)

        // return right(resultUser)

        return this.userRepo.signUp({ name: userData.name, email: userData.email, password: userData.password })
    }

    signIn(email: string, password: string): Observable<UserData> {
        return this.userRepo.signIn(email, password);
    }

    logout(): Observable<boolean> {
        return this.userRepo.logout();
    }
}