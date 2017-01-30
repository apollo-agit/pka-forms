import { Component, Inject, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from './pka.form.model';
import { TextInputDialogComponent } from '../elements/text.input.dialog.component';

@Component({
  selector: 'form-edit',
  templateUrl: './form.edit.component.html'
})

export class FormEditComponent implements AfterViewInit {

	public form : PkaFormModel;
	
	textInputDialogRef: MdDialogRef<TextInputDialogComponent>;

	constructor(public dialog: MdDialog,
		public viewContainerRef: ViewContainerRef,
		private cd: ChangeDetectorRef,
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {}

	ngAfterViewInit() {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.form = data[0];
				this.cd.markForCheck();
			}
		});

		if (!this.form) {
			let newForm = { title: "New Form", description: "Description Here",  formComponents: []}
			this._localStoragereducer.add(newForm);
			this.cd.markForCheck();
		}
	}

	onTextBoxAdd() {
		let config = new MdDialogConfig();
    	config.viewContainerRef = this.viewContainerRef;
    	this.textInputDialogRef = this.dialog.open(TextInputDialogComponent, config);
    	this.textInputDialogRef.afterClosed().subscribe(result => {

    	if(result) {
    		let id = result.name.replace(' ', '_');
    		let comp: FormComponents = {name: id, label: result.label, type: 'text-input', texticon: result.texticon, sequence: 1}
    		this.form.formComponents.push(comp);
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
    	}

		    this.textInputDialogRef = null;
    	});
	}

}