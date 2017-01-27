import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { AdminViewComponent } from './admin.view.component';


@NgModule({
  imports: [
    BrowserModule,
    appRoutes
  ],
  declarations: [
    AdminViewComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AdminViewComponent ]
})

export class AdminModule { }