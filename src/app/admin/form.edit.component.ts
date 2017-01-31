import { Component, Inject, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from './pka.form.model';
import { TextInputDialog } from '../elements/textinput/text.input.dialog.component';
import { TextAreaDialog } from '../elements/textarea/text.area.dialog.component';
import { CheckBoxDialog } from '../elements/checkbox/check.box.dialog.component';
import { OptionListDialog } from '../elements/optionlist/option.list.dialog.component';

@Component({
  selector: 'form-edit',
  templateUrl: './form.edit.component.html'
})

export class FormEditComponent implements AfterViewInit {

	public form : PkaFormModel;
	
	textInputDialogRef: MdDialogRef<TextInputDialog>;
	textAreaDialogRef: MdDialogRef<TextAreaDialog>;
	checkBoxDialogRef: MdDialogRef<CheckBoxDialog>;
	optionListDialogRef: MdDialogRef<OptionListDialog>;

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
    	this.textInputDialogRef = this.dialog.open(TextInputDialog, config);
    	this.textInputDialogRef.afterClosed().subscribe(result => {

    	if(result) {
    		let id = result.name.replace(' ', '_');
    		let comp: FormComponents = {name: id, label: result.label, type: 'text-input', texticon: result.texticon, sequence: 1};
    		this.form.formComponents.push(comp);
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
    	}

		    this.textInputDialogRef = null;
    	});
	}

	onTextAreaAdd() {
		let config = new MdDialogConfig();
    	config.viewContainerRef = this.viewContainerRef;
    	this.textAreaDialogRef = this.dialog.open(TextAreaDialog, config);
    	this.textAreaDialogRef.afterClosed().subscribe(result => {

    	if(result) {
    		let id = result.name.replace(' ', '_');
    		let comp: FormComponents = {name: id, label: result.label, 
    			type: 'text-area', texticon: result.texticon, 
    			width: result.width, height: result.heigth, sequence: 1};
    		this.form.formComponents.push(comp);
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
    	}
		    this.textAreaDialogRef = null;
    	});
	}

	onCheckBoxGroupAdd() {
		let config = new MdDialogConfig();
    	config.viewContainerRef = this.viewContainerRef;
    	this.checkBoxDialogRef = this.dialog.open(CheckBoxDialog, config);
    	this.checkBoxDialogRef.afterClosed().subscribe(result => {

    	if(result) {
    		let id = result.name.replace(' ', '_');
    		let comp: FormComponents = {name: id, label: result.label, 
    			type: 'check-box', options: result.options, sequence: 1};
    		this.form.formComponents.push(comp);
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
    	}
		    this.checkBoxDialogRef = null;
    	});
	}

	onOptionListGroupAdd() {
		let config = new MdDialogConfig();
    	config.viewContainerRef = this.viewContainerRef;
    	this.optionListDialogRef = this.dialog.open(OptionListDialog, config);
    	this.optionListDialogRef.afterClosed().subscribe(result => {

    	if(result) {
    		let id = result.name.replace(' ', '_');
    		let comp: FormComponents = {name: id, label: result.label, 
    			type: 'option-list', options: result.options, sequence: 1};
    		this.form.formComponents.push(comp);
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
    	}
		    this.optionListDialogRef = null;
    	});
	}

}