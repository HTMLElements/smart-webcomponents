import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { ToastModule } from 'smart-webcomponents-angular/toast';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, CheckBoxModule, DropDownListModule, RadioButtonModule, ToastModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
