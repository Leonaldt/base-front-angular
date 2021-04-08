import { Observable } from 'rxjs';
import { UserData } from '../entities/ports/user-data';
import { RegisterUserResponse } from '../usecases/register-user/register-user-response';

export interface UseCase {
    register(user: UserData): Promise<RegisterUserResponse>
}