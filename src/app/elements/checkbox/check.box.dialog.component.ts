import {Component, Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../../admin/pka.form.model';


@Component({
	selector: 'checkboxlistform',
	templateUrl: './check.box.dialog.component.html'

})

export class CheckBoxDialog {

	model: CheckBoxDialogInputModel;

	constructor(public dialogRef: MdDialogRef<CheckBoxDialog>) {
		let mycheckboxes = new Array<string>();
		this.model = {name: '', label: '', options: mycheckboxes};
	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}

	onEnter($event) { 
		if($event.value)
			this.model.options.push($event.value);
		$event.value = null;
	}
}

export interface CheckBoxDialogInputModel {
	name: string,
	label: string,
	options: Array<string>
}