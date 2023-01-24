import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DateTimePickerModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
