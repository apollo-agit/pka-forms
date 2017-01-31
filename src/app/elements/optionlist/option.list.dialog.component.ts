import {Component, Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../../admin/pka.form.model';


@Component({
	selector: 'optionlistform',
	templateUrl: './option.list.dialog.component.html'

})

export class OptionListDialog {

	model: OptionListDialogInputModel;

	constructor(public dialogRef: MdDialogRef<OptionListDialog>) {
		let myoptions = new Array<string>();
		this.model = {name: '', label: '', options: myoptions};
	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}

	onAddOption($event) { 
		if($event.value)
			this.model.options.push($event.value);
		$event.value = null;
	}
}

export interface OptionListDialogInputModel {
	name: string,
	label: string,
	options: Array<string>
}