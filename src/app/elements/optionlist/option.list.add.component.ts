import { Component, OnInit, Inject } from '@angular/core';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponents } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'option-list-add',
  templateUrl: './option.list.add.component.html'
})

export class OptionListAddComponent extends BaseElementComponent implements OnInit {

	options: Array<String>;

	constructor(@Inject('PKAFormStore') localStoragereducer: FluxReducer<PkaFormModel>) {
		super(localStoragereducer);
	}

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.options = this.comp.options;
		}
	}

}