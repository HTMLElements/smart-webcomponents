import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CheckBoxModule, DateTimePickerModule, DropDownListModule, MaskedTextBoxModule, NumericTextBoxModule, PasswordTextBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
