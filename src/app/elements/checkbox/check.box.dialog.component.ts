import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormComponent } from '../../admin/pka.form.model';
import { BaseElementDialog, DialogElementInputModel } from '../base.element.dialog';


@Component({
	selector: 'checkboxlistform',
	templateUrl: './check.box.dialog.component.html'

})

export class CheckBoxDialog extends BaseElementDialog {

	constructor(dialogRef: MdDialogRef<CheckBoxDialog>) {
		let model = {name: '', label: '', options: new Array<string>()};
		super(dialogRef, model);
	}

	formatComponent(result, currentComponent: FormComponent): FormComponent {
		if(!currentComponent)
			return {name: this.createId(result.name), 
				label: result.label, 
    			type: 'check-box', 
    			options: result.options,
    			 sequence: 1
    			};
    	else {
    		currentComponent.name = this.createId(result.name);
    		currentComponent.label = result.label;
    		currentComponent.options = result.options;
    	}
	}

	setBackingObject(comp?: FormComponent) {
		let model = { name: comp.name, label: comp.label, options: comp.options};
		this.model = model;
	}


	onAddOption($event) { 
		let model = <CheckBoxDialogInputModel>this.model;
		if($event.value)
			model.options.push($event.value);
		$event.value = null;
	}
}

export interface CheckBoxDialogInputModel extends DialogElementInputModel {
	options: Array<string>
}