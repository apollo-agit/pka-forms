import { Component, AfterViewInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';

@Component({
  selector: 'text-input-add',
  templateUrl: './text.input.add.component.html'
})

export class TextInputAddComponent {

	_form: PkaFormModel;

	constructor(@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this._form = data[0];
			}
		});
	}

	onClickAddTextInput() {
		this._localStoragereducer.modify(this._form, (value) => {
			let comp = {label: "Text Input", type: "text_input", sequence: 1}
			value.formComponents.push(comp);
			return value;
		});
	}

}