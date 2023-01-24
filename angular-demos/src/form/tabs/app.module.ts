import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from 'smart-webcomponents-angular/form';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { InputModule } from 'smart-webcomponents-angular/input';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, InputModule, CheckBoxModule, MaskedTextBoxModule, DateTimePickerModule, RadioButtonModule, NumericTextBoxModule, DropDownListModule, FormModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
