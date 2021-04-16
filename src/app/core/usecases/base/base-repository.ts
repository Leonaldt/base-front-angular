import { Observable } from "rxjs";

export interface BaseRepository<S, T> {
    execute(params: S): Observable<T>
}