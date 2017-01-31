import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormComponents } from '../../admin/pka.form.model';
import { BaseElementDialog, DialogInputModel } from '../base.element.dialog';


@Component({
	selector: 'checkboxlistform',
	templateUrl: './check.box.dialog.component.html'

})

export class CheckBoxDialog extends BaseElementDialog {

	constructor(dialogRef: MdDialogRef<CheckBoxDialog>) {
		let model = {name: '', label: '', options: new Array<string>()};
		super(dialogRef, model);
	}

	formatComponent(result): FormComponents {
		return {name: this.createId(result.name), label: result.label, 
    			type: 'check-box', options: result.options, sequence: 1};
	}

	setBackingObject(comp?: FormComponents) {
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

export interface CheckBoxDialogInputModel extends DialogInputModel {
	options: Array<string>
}