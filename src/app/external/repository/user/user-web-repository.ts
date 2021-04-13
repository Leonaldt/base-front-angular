import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './user-entity';
import { UserRepositoryMapper } from './user-repository-mapper';
import { map } from 'rxjs/operators';
import { UserRepository } from '../../../core/usecases/ports/user-repository';

@Injectable({
    providedIn: 'root'
})
export class UserWebRepository implements UserRepository {
    private mapper = new UserRepositoryMapper();

    constructor(private http: HttpClient) { }

    signIn(email: string, password: string): Observable<UserEntity> {
        let user = {
            email: email,
            password: password
        }

        return this.http.post<UserEntity>('http://127.0.0.1:5000/api/login', user);
    }

    signUp(userEntity: UserEntity): Observable<UserEntity> {
        let user = {
            name: userEntity.name,
            email: userEntity.email,
            password: userEntity.password
        }

        return this.http.post<UserEntity>('http://127.0.0.1:5000/api/register', user);
    }

    logout(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    getUserById(id: number): Observable<UserEntity> {
        return this.http
            .get<UserEntity>('http://127.0.0.1:5000/api/v1/users/${id}')
            .pipe(map(this.mapper.mapFrom));
    }
}