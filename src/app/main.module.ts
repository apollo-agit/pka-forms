import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [
  	MainComponent
  ],
  providers: [
  ],
  bootstrap: [ 
  	MainComponent 
  ]
})

export class MainModule { }