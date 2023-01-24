import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarModule } from 'smart-webcomponents-angular/calendar';import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CalendarModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
