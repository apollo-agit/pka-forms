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
import { TextInputAddComponent } from '../elements/textinput/text.input.add.component';
import { OptionListAddComponent } from '../elements/optionlist/option.list.add.component';
import { TextAreaAddComponent } from '../elements/textarea/text.area.add.component';
import { CheckBoxAddComponent } from '../elements/checkbox/check.box.add.component';
import { TextInputDialog } from '../elements/textinput/text.input.dialog.component';
import { TextAreaDialog } from '../elements/textarea/text.area.dialog.component';
import { CheckBoxDialog } from '../elements/checkbox/check.box.dialog.component';
import { OptionListDialog } from '../elements/optionlist/option.list.dialog.component';


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
    TextInputDialog,
    TextAreaDialog,
    CheckBoxDialog,
    OptionListDialog,
    ElementFactory
  ],
    entryComponents: [
      TextInputDialog,
      TextAreaDialog,
      CheckBoxDialog,
      OptionListDialog
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