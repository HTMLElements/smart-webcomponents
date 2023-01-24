import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DropDownListModule, CalendarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
