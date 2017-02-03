import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormComponent } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'option-list-add',
  templateUrl: './option.list.add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class OptionListAdd extends BaseElementComponent implements OnInit {

	options: Array<String>;

	public readonly comptitle: string = "Stand Option Radio Buttons";

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.options = this.comp.options;
		}
	}

}