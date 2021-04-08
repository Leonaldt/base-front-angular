import { Either } from "src/app/shared/either";
import { InvalidEmailError } from "../../entities/errors/invalid-email";
import { InvalidNameError } from "../../entities/errors/invalid-name";
import { UserData } from "../../entities/ports/user-data";

export type RegisterUserResponse = Either<InvalidNameError | InvalidEmailError, UserData>
