import { MdDialogRef } from '@angular/material';
import { FormComponent } from '../admin/pka.form.model';

export abstract class BaseElementDialog {

	public model: DialogElementInputModel;
	public dialogRef: MdDialogRef<BaseElementDialog>;

	public icons: Array<string> = new Array<string>('none', 'motorcycle', 
 		'android', 
 		'check_circle', 
 		'credit_card');

	constructor(dialogRef: MdDialogRef<BaseElementDialog>,
		model: DialogElementInputModel) {
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

	abstract setBackingObject(comp?: FormComponent); 

	abstract formatComponent(result, currentComponent?: FormComponent): FormComponent;
}

export interface DialogElementInputModel {
	name: string,
	label: string
}