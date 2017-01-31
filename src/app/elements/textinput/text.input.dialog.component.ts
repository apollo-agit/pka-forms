import {Component, Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../../admin/pka.form.model';


@Component({
	selector: 'textinputform',
	templateUrl: './text.input.dialog.component.html'

})

export class TextInputDialog {

	model: TextDialogInputModel;

	icons: Array<string> = new Array<string>('none', 'motorcycle', 'android', 'check_circle', 'credit_card');

	constructor(public dialogRef: MdDialogRef<TextInputDialog>) {

		this.model = {name: '', label: '', size: 255, texticon: 'none'};
	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}
}

export interface TextDialogInputModel {
	name: string,
	label: string,
	size: number;
	texticon: string
}