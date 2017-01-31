import {Component, Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../../admin/pka.form.model';


@Component({
	selector: 'textareaform',
	templateUrl: './text.area.dialog.component.html'

})

export class TextAreaDialog {

	model: TextAreaDialogInputModel;

	icons: Array<string> = new Array<string>('none', 'motorcycle', 'android', 'check_circle', 'credit_card');

	constructor(public dialogRef: MdDialogRef<TextAreaDialog>) {

		this.model = {name: '', label: '', size: 255, texticon: 'none', width: 250, height: 125};
	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}
}

export interface TextAreaDialogInputModel {
	name: string,
	label: string,
	size: number;
	texticon: string
	width: number,
	height: number
}