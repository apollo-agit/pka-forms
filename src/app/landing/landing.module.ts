import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { LandingView } from './landing.view.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [
  	LandingView
  ],
  providers: [
//    appRoutingProviders
  ],
  bootstrap: [ 
  	LandingView 
  ]
})

export class LandingModule { }