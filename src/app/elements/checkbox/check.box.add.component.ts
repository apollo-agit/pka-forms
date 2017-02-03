import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel, FormComponent } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'check-box-add',
  templateUrl: './check.box.add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckBoxAdd extends BaseElementComponent implements OnInit {

	options: Array<String>;

	public readonly comptitle: string = "Stand Check Box Group";

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.options = this.comp.options;
		}
	}	

}