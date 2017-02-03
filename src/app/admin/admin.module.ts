import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ColorPickerModule } from 'angular2-color-picker';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { AdminView } from './admin.view.component';
import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';
import { FormSettings } from './form.settings.component';
import { FormEdit } from './form.edit.component';
import { FormReview } from './form.review.component';
import { TextInputAdd } from '../elements/textinput/text.input.add.component';
import { OptionListAdd } from '../elements/optionlist/option.list.add.component';
import { TextAreaAdd } from '../elements/textarea/text.area.add.component';
import { CheckBoxAdd } from '../elements/checkbox/check.box.add.component';
import { TextInputDialog } from '../elements/textinput/text.input.dialog.component';
import { TextAreaDialog } from '../elements/textarea/text.area.dialog.component';
import { CheckBoxDialog } from '../elements/checkbox/check.box.dialog.component';
import { OptionListDialog } from '../elements/optionlist/option.list.dialog.component';
import { BasicTextDialog } from '../common/basic.text.dialog';
import { FormComponentSortPipe } from '../elements/element.sequence.filter.pipe';
import { ElementFactory } from '../elements/element.factory';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    ColorPickerModule,
    appRoutes
  ],
  declarations: [
    AdminView,
    TextInputAdd,
    OptionListAdd,
    TextAreaAdd,
    CheckBoxAdd,
    FormEdit,
    FormSettings,
    FormReview,
    TextInputDialog,
    TextAreaDialog,
    CheckBoxDialog,
    OptionListDialog,
    BasicTextDialog,
    ElementFactory,
    FormComponentSortPipe
  ],
    entryComponents: [
      TextInputDialog,
      TextAreaDialog,
      CheckBoxDialog,
      OptionListDialog,
      BasicTextDialog
    ],
  providers: [
    appRoutingProviders,
    { provide: 'key', useValue: 'pkaforms' },
    { provide: 'BackendService', useClass: LocalStorageService },
    { provide: 'PKAFormStore', useClass: FluxReducer }
  ],
  bootstrap: [ AdminView ]
})

export class AdminModule { }