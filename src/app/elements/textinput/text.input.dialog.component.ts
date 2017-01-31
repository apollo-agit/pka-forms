import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormComponents } from '../../admin/pka.form.model';
import { BaseElementDialog, DialogInputModel } from '../base.element.dialog';


@Component({
	selector: 'textinputform',
	templateUrl: './text.input.dialog.component.html'

})

export class TextInputDialog extends BaseElementDialog {

	constructor(dialogRef: MdDialogRef<TextInputDialog>) {
			let model = { name: '', label: '', size: 255, texticon: 'none'};
			

		super(dialogRef, model);
	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}

	formatComponent(result, currentComponent: FormComponents): FormComponents {
		if(!currentComponent)
			return {name: this.createId(result.name), label: result.label, type: 'text-input', texticon: result.texticon, sequence: 1};
		else {
			console.log("here");
			currentComponent.name = result.name;
			currentComponent.label = result.label;
			currentComponent.texticon = result.texticon;
			currentComponent.size = result.size;
		}
	}

	setBackingObject(comp?: FormComponents) {
		let model = { name: comp.name , label: comp.label, size: comp.size, texticon: comp.texticon};
		this.model = model;
	}
}

export interface TextDialogInputModel extends DialogInputModel {
	size: number;
	texticon: string
}