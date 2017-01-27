/*
* This is interesting. It's a pass through service so the 
* flux reducer has the required side effect
*
*  NOT SURE THIS IS A GOOD PATTERN. NEED TO THINK ABOUT IT.
*/


import  { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

import { AbstractBackendService } from './abstract.backend.service';
import { AbstractModel } from './abstract.model';


@Injectable()
export class PassThroughService<T extends AbstractModel> extends AbstractBackendService<T> {


	read(url: string) : Observable<T[]> {
		return Observable.create((observer: Observer<T[]>) => {
			try {
				observer.next(new Array<T>());
			}
			catch(exception) {
				observer.error(exception);
			}
		});
	}

	create(url: string, obj: T) : Observable<T> {
		return Observable.create((observer: Observer<T>) => {
			try {
				observer.next(obj);
			}
			catch(exception) {
				observer.error(exception);
			}

		});
	}

	update(url: string, obj: T) : Observable<T> {
		return Observable.create((observer: Observer<T>) => {
			try {
				observer.next(obj);
			}
			catch(exception) {
				observer.error(exception);
			}

		});

	}

	delete(url: string, obj: T) : Observable<T> {
		return Observable.create((observer: Observer<T>) => {
			try {
				observer.next(obj);
			}
			catch(exception) {
				observer.error(exception);
			}

		});
	}

}