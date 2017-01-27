import { Component } from '@angular/core';
import { FormComponents } from '../admin/pka.form.model';

@Component({
  selector: 'text-input',
  templateUrl: './text.input.component.html'
})

export class TextInputComponent {

	public label: string

	constructor(private _comp: FormComponents) {
		this.label = _comp.label;
	}
}