import { Component, Inject, ViewContainerRef  } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ColorPickerService } from 'angular2-color-picker';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel } from './pka.form.model';
import { BasicTextDialog, DialogBasicInputModel } from '../common/basic.text.dialog';

@Component({
	selector: 'form-settings',
  	templateUrl: './form.settings.component.html'
})

export class FormSettings {

	form: PkaFormModel;

	private settingsDialog: MdDialogRef<BasicTextDialog>;

	constructor(public dialog: MdDialog,
		public viewContainerRef: ViewContainerRef,
		private cpService: ColorPickerService,
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.form = data[0];
			}
		});

		this.config.viewContainerRef = this.viewContainerRef;
	}

	onChangeAnyColor($event){
		this._localStoragereducer.modify(this.form, (value) => {
			return value;
		});
	}

	onClickEditDesc() {
		this.settingsDialog = this.dialog.open(BasicTextDialog, this.config);
    	this.settingsDialog.afterClosed().subscribe(result => {
	    	if(result) {    
	    		this.form.description = result.val;		   		
				this._localStoragereducer.modify(this.form, (value) => {
					return value;
				});
	    	}
		    this.settingsDialog = null;
    	});

	}

	onClickEditTitle() {
		this.settingsDialog = this.dialog.open(BasicTextDialog, this.config);
    	this.settingsDialog.afterClosed().subscribe(result => {
	    	if(result) {    
	    		this.form.title = result.val;		   		
				this._localStoragereducer.modify(this.form, (value) => {
					return value;
				});
	    	}
		    this.settingsDialog = null;
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
