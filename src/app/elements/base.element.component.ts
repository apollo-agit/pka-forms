import { Inject, Input } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';

export abstract class BaseElementComponent {

	@Input() comp: FormComponents;
	
	protected _form: PkaFormModel;
	protected _localStoragereducer;

	public elementid: string;
	public size: number;
	public placeholder: string;
	
	public buttonicon: string = "add circle";	

	constructor(localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer = localStoragereducer;

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this._form = data[0];
			}
		});
	}

}