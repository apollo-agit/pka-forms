import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormComponents } from '../../admin/pka.form.model';
import { BaseElementDialog, DialogInputModel } from '../base.element.dialog';


@Component({
	selector: 'textareaform',
	templateUrl: './text.area.dialog.component.html'

})

export class TextAreaDialog extends BaseElementDialog {

	constructor(dialogRef: MdDialogRef<TextAreaDialog>) {
		let model = {name: '', label: '', size: 255, texticon: 'none', width: 250, height: 125}
		super(dialogRef, model);
	}

	formatComponent(result): FormComponents {
		return {name: this.createId(result.name), label: result.label, 
    			type: 'text-area', texticon: result.texticon, 
    			width: result.width, height: result.heigth, sequence: 1}
	}

	setBackingObject(comp?: FormComponents) {
		let model = { name: comp.name , label: comp.label, size: comp.size, texticon: comp.texticon,
			width: comp.width, height: comp.height};
		this.model = model;
	}

}

export interface TextAreaDialogInputModel extends DialogInputModel {
	size: number;
	texticon: string
	width: number,
	height: number
}