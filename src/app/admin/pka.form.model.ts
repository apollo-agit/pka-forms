import { Inject, Injectable } from '@angular/core';
import { AbstractModel } from '../common/abstract.model';

export interface PkaFormModel extends AbstractModel {
	title: string,
	description: string, 
	formComponents: FormComponents[]
}

export interface FormComponents {
	label: string,
	type: string,
	sequence: number
}