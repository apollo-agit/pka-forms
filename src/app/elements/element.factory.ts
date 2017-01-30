import { Component, Input } from '@angular/core';
import { FormComponents } from '../admin/pka.form.model';

@Component({
  selector: 'element-factory',
  templateUrl: './element.factory.html'
})

export class ElementFactory {
	@Input() element: FormComponents;
}