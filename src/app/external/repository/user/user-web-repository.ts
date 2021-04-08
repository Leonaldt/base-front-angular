import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './user-entity';
import { UserRepositoryMapper } from './user-repository-mapper';
import { map } from 'rxjs/operators';
import { UserRepository } from './user-repository';

@Injectable({
    providedIn: 'root'
})
export class UserWebRepository implements UserRepository {
    private mapper = new UserRepositoryMapper();

    constructor(private http: HttpClient) { }

    register(userEntity: UserEntity): Observable<UserEntity> {
        let user = {
            name: userEntity.name,
            email: userEntity.email
        }

        return this.http.post<UserEntity>('http://127.0.0.1:5000/api/register', user);
    }

    getUserById(id: number): Observable<UserEntity> {
        return this.http
            .get<UserEntity>('http://127.0.0.1:5000/api/v1/users/${id}')
            .pipe(map(this.mapper.mapFrom));
    }
}