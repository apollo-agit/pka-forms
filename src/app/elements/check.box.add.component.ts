import { Component, AfterViewInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../admin/pka.form.model';
import { BaseElementComponent } from './base.element.component';

@Component({
  selector: 'check-box-add',
  templateUrl: './check.box.add.component.html'
})

export class CheckBoxAddComponent extends BaseElementComponent implements AfterViewInit {

	label = "Checkbox Elements";
	buttonicon = "add circle";

	private readonly _label = "New Checkbox";
	private readonly _type = "check-box";

	constructor(@Inject('PKAFormStore') localStoragereducer: FluxReducer<PkaFormModel>) {
		super(localStoragereducer);

		if(this.comp) {
			this.label = this.comp.label;
			this.buttonicon = "edit circle";
		} else {
			this.comp = {label: this._label, type: this._type, sequence: 1}
		}
	}

	ngAfterViewInit() {		

	}

}