import { Pipe, PipeTransform } from '@angular/core';

import { FormComponent } from '../admin/pka.form.model';


@Pipe({
	name: 'componentsort', 
	pure: true
})

export class FormComponentSortPipe implements PipeTransform {
	transform(array: Array<FormComponent>, args?): Array<FormComponent> {
		var retval: Array<FormComponent>;
		if (array) {
			array.sort((a: FormComponent, b: FormComponent) => 
			{
				if (a.sequence < b.sequence)
					return -1;
				else if (a.sequence > b.sequence)
					return 1;
				else 
					return 0;
			});
			retval = array;
		}
		return retval;
	}
}
