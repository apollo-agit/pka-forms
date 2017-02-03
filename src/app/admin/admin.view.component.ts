import { Component, OnInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, Theme } from './pka.form.model';

@Component({
  templateUrl: './admin.view.component.html'
})

export class AdminView implements OnInit {

	constructor(
		@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {	
	}

	ngOnInit() {
		this._localStoragereducer.backingObject.subscribe(data => {
			console.log("subscribe");
			console.log(data)
			if (!data || data.length == 0) {
				console.log('load')
				let theme: Theme = {primary: "#127bdc", secondary: "#127bcd", accent: "#127bcd"};
				let form = { title: "My New Form Title", 
				description: "My New Form Desciption",  
				theme: theme,
				formComponents: []}
				this._localStoragereducer.add(form);
			}
		});
		this._localStoragereducer.load();
	}

}