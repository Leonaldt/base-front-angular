import { UserEntity } from './user-entity';
import { User } from 'src/app/core/entities/user/user';
import { InvalidEmailError } from 'src/app/core/entities/errors/invalid-email';
import { InvalidNameError } from 'src/app/core/entities/errors/invalid-name';
import { Either, right, left } from 'src/app/shared/either';
import { Mapper } from '../../base/mapper';

export class UserRepositoryMapper extends Mapper<UserEntity, User> {

    mapFrom(userEntity: UserEntity): any {

        const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create({ name: userEntity.name, email: userEntity.email })

        if (userOrError.isLeft()) {
            return left(userOrError.value)
        }

        const user: User = userOrError.value
        return right(user);
    }

    mapTo(user: User): UserEntity {
        return {
            name: user.name.toString(),
            email: user.email.toString(),
        };
    }
}