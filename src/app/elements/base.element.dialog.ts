import { MdDialogRef } from '@angular/material';
import { FormComponents } from '../admin/pka.form.model';

export abstract class BaseElementDialog {

	public model: DialogInputModel;
	public dialogRef: MdDialogRef<BaseElementDialog>;

	public icons: Array<string> = new Array<string>('none', 'motorcycle', 
 		'android', 
 		'check_circle', 
 		'credit_card');

	constructor(dialogRef: MdDialogRef<BaseElementDialog>,
		model: DialogInputModel) {
		this.dialogRef = dialogRef;
		this.model = model;
	}

 	onSubmit()  {
		this.dialogRef.close(this.model);
	}

	 onCancel()  {
		this.dialogRef.close(null);
	}

	protected createId(name): string {
		return name.replace(' ', '_');
	}

	abstract setBackingObject(comp?: FormComponents); 

	abstract formatComponent(result, currentComponent?: FormComponents): FormComponents;
}

export interface DialogInputModel {
	name: string,
	label: string
}