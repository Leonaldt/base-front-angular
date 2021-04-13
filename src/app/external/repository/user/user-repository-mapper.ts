import { User } from 'src/app/core/entities/user/user';
import { InvalidEmailError } from 'src/app/core/entities/errors/invalid-email';
import { InvalidNameError } from 'src/app/core/entities/errors/invalid-name';
import { Either, right, left } from 'src/app/shared/either';
import { Mapper } from '../../base/mapper';
import { UserData } from 'src/app/core/entities/ports/user-data';

export class UserRepositoryMapper extends Mapper<UserData, User> {

    mapFrom(userData: UserData): any {

        const userOrError: Either<InvalidNameError | InvalidEmailError, User> =
            User.create({
                name: userData.name, email: userData.email, password: userData.password
            })

        if (userOrError.isLeft()) {
            return left(userOrError.value)
        }

        const user: User = userOrError.value
        return right(user);
    }

    mapTo(user: User): UserData {
        return {
            name: user.name.toString(),
            email: user.email.toString(),
            password: user.password
        };
    }
}