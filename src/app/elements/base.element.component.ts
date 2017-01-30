import { Inject, Input } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';

export abstract class BaseElementComponent {

	protected _form: PkaFormModel;
	@Input() comp: FormComponents;

	protected _localStoragereducer;

	constructor(localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer = localStoragereducer;

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this._form = data[0];
			}
		});
	}

	onClickEditInput() {
		this._form.formComponents.push(this.comp);
		this._localStoragereducer.modify(this._form, (value) => {
			return value;
		});
	}

}