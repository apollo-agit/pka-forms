import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { MainComponent } from './main.component';
import { appRoutes, appRoutingProviders } from './common/app.routes';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AdminModule,
    appRoutes
  ],
  declarations: [
  	MainComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ 
  	MainComponent 
  ]
})

export class MainModule { }