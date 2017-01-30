import { Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';

export abstract class BaseElementComponent {

	_form: PkaFormModel;
	protected _localStoragereducer;

	constructor(localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer = localStoragereducer;

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this._form = data[0];
			}
		});
	}

}