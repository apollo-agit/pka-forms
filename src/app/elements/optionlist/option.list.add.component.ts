import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormComponent } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'option-list-add',
  templateUrl: './option.list.add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class OptionListAddComponent extends BaseElementComponent implements OnInit {

	options: Array<String>;

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.options = this.comp.options;
		}
	}

}