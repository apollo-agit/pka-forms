import { Component, AfterViewInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';
import { BaseElementComponent } from './base.element.component';

@Component({
  selector: 'option-list-add',
  templateUrl: './option.list.add.component.html'
})

export class OptionListAddComponent extends BaseElementComponent {

	constructor(@Inject('PKAFormStore') localStoragereducer: FluxReducer<PkaFormModel>) {
		super(localStoragereducer);
	}

	onClickAddTextInput() {
		this._localStoragereducer.modify(this._form, (value) => {
			let comp = {label: "Text Input", type: "text_input", sequence: 1}
			value.formComponents.push(comp);
			return value;
		});
	}

}