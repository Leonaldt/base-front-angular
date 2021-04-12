import { Either, right, left } from "src/app/shared/either";
import { InvalidEmailError } from "../errors/invalid-email";
import { InvalidNameError } from "../errors/invalid-name";
import { UserData } from "../ports/user-data";
import { Email } from "../ValueObjects/email";
import { Name } from "../ValueObjects/name";

export class User {

    private constructor(
        readonly name: Name,
        readonly email: Email,
        readonly password: string
    ) {
        Object.freeze(this)
    }

    static create(userData: UserData): Either<InvalidNameError | InvalidEmailError, User> {
        const nameOrError: Either<InvalidNameError, Name> = Name.create(userData.name)
        const emailOrError: Either<InvalidEmailError, Email> = Email.create(userData.email)
        if (nameOrError.isLeft()) {
            return left(nameOrError.value)
        }
        if (emailOrError.isLeft()) {
            return left(emailOrError.value)
        }
        const name: Name = nameOrError.value
        const email: Email = emailOrError.value
        return right(new User(name, email, userData.password))
    }
}