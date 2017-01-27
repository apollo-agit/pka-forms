import { Component, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from './pka.form.model';

@Component({
  selector: 'form-edit',
  templateUrl: './form.edit.component.html'
})

export class FormEditComponent implements AfterViewInit {

	public form : PkaFormModel;

	constructor(@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>,
		private cd: ChangeDetectorRef) {}

	ngAfterViewInit() {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.form = data[0];
				this.cd.markForCheck();
			}
		});

		if (!this.form) {
			let newForm = { title: "New Form", description: "Description Here",  formComponents: []}
			this._localStoragereducer.add(newForm);
			this.cd.markForCheck();
		}
	}

}