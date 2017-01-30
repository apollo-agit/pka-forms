import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { AdminViewComponent } from './admin.view.component';
import { ElementSelectionComponent } from './element.selection.component';
import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';
import { FormEditComponent } from './form.edit.component';
import { ElementFactory } from '../elements/element.factory';
import { TextInputAddComponent } from '../elements/text.input.add.component';
import { OptionListComponent } from '../elements/option.list.add.component';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  declarations: [
    AdminViewComponent,
    ElementSelectionComponent,
    TextInputAddComponent,
    FormEditComponent,
    ElementFactory
  ],
  providers: [
    appRoutingProviders,
    { provide: 'key', useValue: 'pkaforms' },
    { provide: 'BackendService', useClass: LocalStorageService },
    { provide: 'PKAFormStore', useClass: FluxReducer }
  ],
  bootstrap: [ AdminViewComponent ]
})

export class AdminModule { }