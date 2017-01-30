import { Component, AfterViewInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';
import { BaseElementComponent } from './base.element.component';

@Component({
  selector: 'text-input-add',
  templateUrl: './text.input.add.component.html'
})

export class TextInputAddComponent extends BaseElementComponent implements AfterViewInit {

	placeholder = "Text Input Element";
	icon = "motorcycles";
	buttonicon = "add circle";

	private readonly _label = "Text Input";
	private readonly _type = "text_input";

	constructor(@Inject('PKAFormStore') localStoragereducer: FluxReducer<PkaFormModel>) {
		super(localStoragereducer);	

		if(this.comp) {
			this.placeholder = this.comp.label;
			this.buttonicon = "edit circle";
		} else {
			this.comp = {label: this._label, type: this._type, sequence: 1}
		}	
	}

	ngAfterViewInit() {		
		
	}	

}