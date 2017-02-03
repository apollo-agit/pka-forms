import { Component, Inject, OnInit, ChangeDetectorRef, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, ComponentType } from '@angular/material';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, FormComponent } from './pka.form.model';
import { TextInputDialog } from '../elements/textinput/text.input.dialog.component';
import { TextAreaDialog } from '../elements/textarea/text.area.dialog.component';
import { CheckBoxDialog } from '../elements/checkbox/check.box.dialog.component';
import { OptionListDialog } from '../elements/optionlist/option.list.dialog.component';
import { BaseElementDialog, DialogElementInputModel } from '../elements/base.element.dialog';
import { FormComponentSortPipe } from '../elements/element.sequence.filter.pipe';

@Component({
  selector: 'form-edit',
  templateUrl: './form.edit.component.html'
})

export class FormEdit implements OnInit {

	public form : PkaFormModel;
	public comps: Array<FormComponent>;

	private elementDialog: MdDialogRef<BaseElementDialog>;

	constructor(public dialog: MdDialog,
		public viewContainerRef: ViewContainerRef,
		private cd: ChangeDetectorRef,
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {
		this.config.viewContainerRef = this.viewContainerRef;
	}

	ngOnInit() {
		this._localStoragereducer.backingObject.subscribe(data => {
		this.comps = null;
		this.cd.detectChanges();
		if (data && data.length > 0) {
			this.form = data[0];
			this.comps = this.form.formComponents;
			this.cd.detectChanges();
			}
		});
	}

	private findComponent(name: string): FormComponent {
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

	elementRemove($event) {
		if($event) {
			let i = this.findComponentIndex($event.name);		
			this.form.formComponents.splice(i, 1);
				this._localStoragereducer.modify(this.form, (value) => {
				return value;
			});
		}
	}

	textInputChange($event) {
		this.showDialog(TextInputDialog, this.findComponent($event.name));
	}

	textAreaChange($event) {
		console.log("area");
		this.showDialog(TextAreaDialog, this.findComponent($event.name));
	}

	checkBoxChange($event) {
		this.showDialog(CheckBoxDialog, this.findComponent($event.name));
	}

	optionListChange($event) {
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
		currentComp?: FormComponent) {

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