import { Component, OnInit, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PkaFormModel, Theme } from './pka.form.model';

@Component({
  selector: 'form-review',
  templateUrl: './form.review.component.html'
})

export class FormReview {

	form: PkaFormModel;

	constructor(@Inject('PKAFormStore') private _localStoragereducer: FluxReducer<PkaFormModel>) {

		this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.form = data[0];
			}
		});
	}
}