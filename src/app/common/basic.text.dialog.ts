import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
	selector: 'checkboxlistform',
	template: `'<div>
    <div class="form-group">
        <md-input placeholder="Enter Value" id="val" required class="form-control" name="val" 
        [(ngModel)]="model.val"></md-input>
    </div>
    <md-dialog-actions>
        <button md-raised-button name="btnOk" class="btn btn-default" (click)="onSubmit()">OK</button>
        <button md-raised-button name="btnCancel" class="btn btn-default" (click)="onCancel()">Cancel</button>
    </md-dialog-actions>
	</div>'
`
})

export class BasicTextDialog {
	public model: DialogBasicInputModel = {val: "" }

	constructor(protected dialogRef: MdDialogRef<BasicTextDialog>) {

	}

	onSubmit()  {
		this.dialogRef.close(this.model);
	}

	onCancel()  {
		this.dialogRef.close(null);
	}

}

export interface DialogBasicInputModel {
	val: string
}