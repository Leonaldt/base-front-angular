import { Injectable } from '@angular/core';
import { Either, left, right } from 'src/app/shared/either';
import { UseCase } from '../../base/usecase';
import { UserData } from '../../entities/ports/user-data';
import { UserRepository } from '../ports/user-repository';
import { RegisterUserResponse } from './register-user-response';
import { InvalidNameError } from '../../entities/errors/invalid-name'
import { InvalidEmailError } from '../../entities/errors/invalid-email'
import { User } from '../../entities/user/user'
import { RegisterUser } from '../ports/register-user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterUserUseCase implements RegisterUser {

    constructor(private userRepo: UserRepository) { }

    register(userData: UserData): Observable<UserData> {

        // const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(userData)

        // if (userOrError.isLeft()) {
        //     return left(userOrError.value)
        // }
        // console.log('User Use Case...!')

        // const user: User = userOrError.value
        // const resultUser = this.userRepo.register({ name: user.name.value, email: user.email.value })

        // console.log('resultUser: ', resultUser)

        // return right(resultUser)

        return this.userRepo.register({ name: userData.name, email: userData.email })
    }
}