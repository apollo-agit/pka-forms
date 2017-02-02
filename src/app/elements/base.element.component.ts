import { Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormComponent } from '../admin/pka.form.model';

export abstract class BaseElementComponent {

	@Input() comp: FormComponent;
	@Output() change: EventEmitter<FormComponent> = new EventEmitter<FormComponent>();
	@Output() remove: EventEmitter<FormComponent> = new EventEmitter<FormComponent>();
	
	protected _localStoragereducer;

	public elementid: string;
	public size: number;
	public placeholder: string;
	
	public addbuttonicon: string = "edit circle";	
	public removebuttonicon: string = "remove circle"

	onClickEditElement() {
		this.change.emit(this.comp);
	}

	onClickRemoveElement() {
		this.remove.emit(this.comp);
	}
}