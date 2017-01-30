import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { AdminViewComponent } from './admin.view.component';
import { ElementSelectionComponent } from './element.selection.component';
import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';
import { FormEditComponent } from './form.edit.component';
import { ElementFactory } from '../elements/element.factory';
import { TextInputAddComponent } from '../elements/text.input.add.component';
import { OptionListAddComponent } from '../elements/option.list.add.component';
import { TextAreaAddComponent } from '../elements/text.area.add.component';
import { CheckBoxAddComponent } from '../elements/check.box.add.component';
import { TextInputDialogComponent } from '../elements/text.input.dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  declarations: [
    AdminViewComponent,
    ElementSelectionComponent,
    TextInputAddComponent,
    OptionListAddComponent,
    TextAreaAddComponent,
    CheckBoxAddComponent,
    FormEditComponent,
    TextInputDialogComponent,
    ElementFactory
  ],
    entryComponents: [
      TextInputDialogComponent
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