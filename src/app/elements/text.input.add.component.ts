import { Component, OnInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';
import { BaseElementComponent } from './base.element.component';

@Component({
  selector: 'text-input-add',
  templateUrl: './text.input.add.component.html'
})

export class TextInputAddComponent extends BaseElementComponent implements OnInit {

	elementid;
	placeholder;
	icon;
	buttonicon;
	size;

	private readonly _label = "Text Input";
	private readonly _type = "text_input";

	constructor(@Inject('PKAFormStore') localStoragereducer: FluxReducer<PkaFormModel>) {
		super(localStoragereducer);	
	}

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.icon = this.comp.texticon;
			this.buttonicon = "edit circle";
			this.size = this.comp.size;
		}
	}	

}