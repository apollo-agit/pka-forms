import { Component, OnInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, Theme } from './pka.form.model';

@Component({
  templateUrl: './admin.view.component.html'
})

export class AdminView implements OnInit {

	form: PkaFormModel;

	constructor(
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {
	
	}

	ngOnInit() {
		if (!this.form) {
			let theme: Theme = {primary: "#127bdc", secondary: "#127bcd", accent: "#127bcd"};
			this.form = { title: "My New Form Title", 
				description: "My New Form Desciption",  
				theme: theme,
				 formComponents: []}
			console.log("before add");
			this._localStoragereducer.add(this.form);
		}
	}

}