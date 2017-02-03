/*
* Generic reducer should cover most needs, backend store is injected
* for side effect storage and retrieval
*/

import { Injectable, Inject } from '@angular/core';
import  { Observable, Subject } from 'rxjs';
import * as Immutable  from 'immutable';


import { AbstractModel } from './abstract.model';
import { AbstractBackendService } from './abstract.backend.service';


@Injectable()
export class FluxReducer<T extends AbstractModel> {

	private _store: Immutable.Map<string, T>;

	key: string;

	protected _backingObject: Subject<Array<T>>;

	public backingObject: Observable<Array<T>>;

	constructor(@Inject('key') _key: string,
				@Inject('BackendService') private _backendService?: AbstractBackendService<T>) {
		this.key = _key;
		this._backingObject = new Subject<Array<T>>();
		this.backingObject = this._backingObject.asObservable();
		this._store = Immutable.Map<string, T>();
	}

	public load(callback?): void {
		this._backendService.read(this.key).subscribe(
			data => {
				if(callback)
					callback(data);
				this.initialize(data)
			})		
	}

	private initialize(data: Array<T>) {
		if(data) {
				data.forEach(model => {
					this._store = this._store.set(model.id, model);
				});
			}
		this._backingObject.next(this._store.toArray());
	}

	public add(obj: T): void {
		this._backendService.create(this.key, obj).subscribe(
			single => {
				this._store = this._store.set(single.id, single);
				this._backingObject.next(this._store.toArray());
			});		
	}

// This method I do not like....it forces the callback which in turn makes two seperate 
// methods of update for the store vs the side effect
// need to think about this
	public modify(obj: T, callback?: CallbackFunction<T>): void {
		this._backendService.update(this.key, obj).subscribe(
			mutant => {
				this._store = this._store.update(obj.id, value => callback(value));		
				this._backingObject.next(this._store.toArray());
			});	
	}

	public remove(obj: T): void {
		this._backendService.update(this.key, obj).subscribe(
			orphan => {
				this._store = this._store.remove(obj.id);
				localStorage.setItem(this.key, JSON.stringify(this._store.toArray()));
				this._backingObject.next(this._store.toArray());
			});		
	}

}

export interface CallbackFunction<T> {
	(obj: T): T;
}
