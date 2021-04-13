import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRepositoryMapper } from './user-repository-mapper';
import { map } from 'rxjs/operators';
import { UserRepository } from 'src/app/core/usecases/ports/user-repository';
import { UserData } from 'src/app/core/entities/ports/user-data';

@Injectable({
    providedIn: 'root'
})
export class UserWebRepository implements UserRepository {
    private mapper = new UserRepositoryMapper();

    constructor(private http: HttpClient) { }
    
    signIn(email: string, password: string): Observable<UserData> {
        let user = {
            email: email,
            password: password
        }

        return this.http.post<UserData>('http://127.0.0.1:5000/api/login', user);
    }

    signUp(userData: UserData): Observable<UserData> {
        let user = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        }

        return this.http.post<UserData>('http://127.0.0.1:5000/api/register', user);
    }

    logout(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }
    
    // getUserById(id: number): Observable<UserData> {
    //     return this.http
    //         .get<UserData>('http://127.0.0.1:5000/api/v1/users/${id}')
    //         .pipe(map(this.mapper.mapFrom));
    // }
}