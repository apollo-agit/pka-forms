import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FluxReducer } from '../../common/flux.reducer';
import { PkaFormModel } from '../../admin/pka.form.model';
import { BaseElementComponent } from '../base.element.component';

@Component({
  selector: 'text-area-add',
  templateUrl: './text.area.add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextAreaAdd extends BaseElementComponent implements OnInit {

	public icon: string;
	public width: number;
	public height: number;

	public readonly comptitle: string = "Stand Input Text Area";

	ngOnInit() {
		if(this.comp) {
			this.elementid = this.comp.name;
			this.placeholder = this.comp.label;
			this.icon = this.comp.texticon;
			this.size = this.comp.size;
			this.width = this.comp.width;
			this.height = this.comp.height;
		}
	}		

}