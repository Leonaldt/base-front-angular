
import { Observable } from 'rxjs';
import { UserData } from '../../entities/ports/user-data';

export abstract class UserRepository {
    abstract register(UserData: UserData): Observable<UserData>
    // abstract findAllUsers(): Observable<UserData[]>
    // abstract findUserByEmail(email: string): Observable<UserData>
    // abstract exists(email: string): Observable<boolean>
}