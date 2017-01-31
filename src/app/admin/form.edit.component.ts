import { Component, Inject, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, ComponentType } from '@angular/material';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponents } from './pka.form.model';
import { TextInputDialog } from '../elements/textinput/text.input.dialog.component';
import { TextAreaDialog } from '../elements/textarea/text.area.dialog.component';
import { CheckBoxDialog } from '../elements/checkbox/check.box.dialog.component';
import { OptionListDialog } from '../elements/optionlist/option.list.dialog.component';
import { BaseElementDialog, DialogInputModel } from '../elements/base.element.dialog';

@Component({
  selector: 'form-edit',
  templateUrl: './form.edit.component.html'
})

export class FormEditComponent implements AfterViewInit {

	public form : PkaFormModel;

	private elementDialog: MdDialogRef<BaseElementDialog>;

	constructor(public dialog: MdDialog,
		public viewContainerRef: ViewContainerRef,
		private cd: ChangeDetectorRef,
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {

		if (!this.form) {
			this.form = { title: "New Form", description: "Description Here",  formComponents: []}
			this._localStoragereducer.add(this.form);
		}

		this.config.viewContainerRef = this.viewContainerRef;
	}

	ngAfterViewInit() {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.form = data[0];
			}
		});

		
	}

	private findComponent(name: string): FormComponents {
		let comp = this.form.formComponents.find((value) => {
			return value.name == name;
		});
		return comp;
	}

	private findComponentIndex(name: string): number {
		let indx = this.form.formComponents.findIndex((value) => {
			return value.name == name;
		});
		return indx;
	}

	textInputChange($event) {
		this.showDialog(TextInputDialog, this.findComponent($event.name));
	}

	textAreaChange($event) {
		this.showDialog(TextAreaDialog, this.findComponent($event.name));
	}

	checkBoxChange($event) {
		this.showDialog(CheckBoxDialog, this.findComponent($event.name));
	}

	radioListChange($event) {
		this.showDialog(OptionListDialog, this.findComponent($event.name));
	}

	onTextBoxAdd() {
  		this.showDialog(TextInputDialog);
	}

	onTextAreaAdd() {
		this.showDialog(TextAreaDialog);
	}

	onCheckBoxGroupAdd() {
		this.showDialog(CheckBoxDialog); 
	}

	onOptionListGroupAdd() {
		this.showDialog(OptionListDialog);
	}

	protected showDialog(type: ComponentType<BaseElementDialog>,
		currentComp?: FormComponents) {

		this.elementDialog = this.dialog.open(type, this.config);
		if(currentComp)
			this.elementDialog.componentInstance.setBackingObject(currentComp);
    	this.elementDialog.afterClosed().subscribe(result => {

    	if(result) {
    		let comp = this.elementDialog.componentInstance.formatComponent(result, currentComp);
    		if(!currentComp)
    			this.form.formComponents.push(comp);    		
			this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
			this.cd.checkNoChanges();
    	}
		    this.elementDialog = null;
    	});
	}

	config: MdDialogConfig = {
    	disableClose: true,
    	width: '',
    	height: '',
    	position: {
    	  	top: '',
     		bottom: '',
      		left: '',
      		right: ''
    	}
  	};

}