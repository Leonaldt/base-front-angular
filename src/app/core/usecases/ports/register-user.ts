import { Observable } from "rxjs";
import { UserData } from "../../entities/ports/user-data";

export abstract class RegisterUser {
    abstract register(user: UserData): Observable<UserData>
    abstract login(param: UserData): Observable<UserData>
    abstract logout(): Observable<boolean>
}