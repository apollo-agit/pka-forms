import { Component, AfterViewInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel } from './pka.form.model';

@Component({
  templateUrl: './admin.view.component.html'
})

export class AdminViewComponent {

constructor(@Inject('PKAFormStore') private _reducer: FluxReducer<PkaFormModel> ) {	}

	ngAfterViewInit() {
		this._reducer.load();
	}

 }