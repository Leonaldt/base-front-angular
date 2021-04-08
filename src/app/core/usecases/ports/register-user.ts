import { Observable } from "rxjs";
import { UserData } from "../../entities/ports/user-data";
import { RegisterUserResponse } from "../register-user/register-user-response";

export abstract class RegisterUser {
    abstract register(user: UserData): Observable<UserData>
}