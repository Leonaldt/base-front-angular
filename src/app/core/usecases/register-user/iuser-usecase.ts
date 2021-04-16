import { Observable } from 'rxjs';
import { UserData } from '../../entities/ports/user-data';

export abstract class IRegisterUserUseCase {
    abstract signUp(UserData: UserData): Observable<UserData>
    abstract signIn(email: string, password: string): Observable<UserData>
}