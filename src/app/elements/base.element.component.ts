import { Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormComponents } from '../admin/pka.form.model';

export abstract class BaseElementComponent {

	@Input() comp: FormComponents;
	@Output() change: EventEmitter<FormComponents> = new EventEmitter<FormComponents>();
	
	protected _localStoragereducer;

	public elementid: string;
	public size: number;
	public placeholder: string;
	
	public addbuttonicon: string = "edit circle";	
	public removebuttonicon: string = "remove circle"

	onClickEditInput() {
		this.change.emit(this.comp);
	}
}