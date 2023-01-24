import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from 'smart-webcomponents-angular/form';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FormModule, DropDownListModule, MaskedTextBoxModule, DateTimePickerModule, InputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
