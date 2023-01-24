import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ValidatorModule } from 'smart-webcomponents-angular/validator';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ValidatorModule, ButtonModule, CheckBoxModule, DateTimePickerModule, MaskedTextBoxModule, PasswordTextBoxModule, RadioButtonModule, TextBoxModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
