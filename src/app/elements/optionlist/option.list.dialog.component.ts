import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormComponent } from '../../admin/pka.form.model';
import { BaseElementDialog, DialogElementInputModel } from '../base.element.dialog';


@Component({
	selector: 'optionlistform',
	templateUrl: './option.list.dialog.component.html'

})

export class OptionListDialog extends BaseElementDialog {

	constructor(dialogRef: MdDialogRef<OptionListDialog>) {
		let model = {name: '', label: '', options: new Array<string>()};
		super(dialogRef, model);
	}

	formatComponent(result, currentComponent: FormComponent): FormComponent {
		if(!currentComponent)
			return {name: this.createId(result.name), 
				label: result.label, 
    			type: 'option-list', 
    			options: result.options, 
    			sequence: 1};
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
		let model = <OptionListDialogInputModel>this.model;
		if($event.value)
			model.options.push($event.value);
		$event.value = null;
	}
}

export interface OptionListDialogInputModel extends DialogElementInputModel {
	options: Array<string>
}