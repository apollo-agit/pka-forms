/*
* Service for local storage
*/

import  { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

import { AbstractBackendService } from './abstract.backend.service';
import { AbstractModel } from './abstract.model';

import { UUID } from 'angular2-uuid';

@Injectable()
export class LocalStorageService<T extends AbstractModel> extends AbstractBackendService<T> {


	read(url: string) : Observable<T[]> {
		return Observable.create((observer: Observer<T[]>) => {
			try {
				let value = JSON.parse(localStorage.getItem(url));
				observer.next(value);
			}
			catch(exception) {
				observer.error(exception);
			}

		});
	}

	create(url: string, obj: T) : Observable<T> {
		return Observable.create((observer: Observer<T>) => {
			try {
				obj.id = UUID.UUID();
				let value: Array<T> = JSON.parse(localStorage.getItem(url));
				if(!value) 
					value = new Array<T>();
				value.push(obj);
				localStorage.setItem(url, JSON.stringify(value));
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
				let value: Array<T> = JSON.parse(localStorage.getItem(url));
				let indx: number = value.findIndex((single) => {
					return single.id == obj.id;
				})		
				value[indx] = obj;
				localStorage.setItem(url, JSON.stringify(value));
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
				let value: Array<T> = JSON.parse(localStorage.getItem(url));
				let indx: number = value.findIndex((single) => {
					return single.id == obj.id;
				})		
				value.splice(indx, 1);
				localStorage.setItem(url, JSON.stringify(value));
				observer.next(obj);
			}
			catch(exception) {
				observer.error(exception);
			}

		});
	}

}