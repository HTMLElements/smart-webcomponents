import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DropDownListModule, ButtonModule, NumericTextBoxModule, InputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
