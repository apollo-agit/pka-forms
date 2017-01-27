/*
* Backend Service Abstract Class
*/
import  { Observable } from 'rxjs';

export abstract class AbstractBackendService<T> {

	abstract read(url: string) : Observable<T[]>;

	abstract create(url: string, obj: T) : Observable<T>;

	abstract update(url: string, obj: T) : Observable<T>;

	abstract delete(url: string, obj: T) : Observable<T>;

}