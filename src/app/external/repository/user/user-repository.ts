
import { Observable } from 'rxjs';
import { UserEntity } from './user-entity';

export abstract class UserRepository {
    abstract register(UserData: UserEntity): Observable<UserEntity>
}