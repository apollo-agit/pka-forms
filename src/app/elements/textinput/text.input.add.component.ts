import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'text-input-add',
  templateUrl: './text.input.add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextInputAdd extends BaseElementComponent implements OnInit {

	public icon: string;	

	public readonly comptitle: string = "Stand Input Text Box";

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.icon = this.comp.texticon;
			this.size = this.comp.size;
		}
	}	

}