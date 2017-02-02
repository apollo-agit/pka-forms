import { Inject, Injectable } from '@angular/core';
import { AbstractModel } from '../common/abstract.model';

export interface PkaFormModel extends AbstractModel {
	title: string,
	description: string, 
	theme: Theme,
	formComponents: FormComponent[]
}

export interface FormComponent {
	sequence: number,
	name: string,
	label: string,
	type: string,
	size?: number,
	texticon?: string,	
	width?: number, 
	height?: number,
	options?: Array<string>
}

export interface Theme {
	primary: string,
	secondary: string,
	accent: string
}