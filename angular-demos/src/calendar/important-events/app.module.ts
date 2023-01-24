import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { DateRangeInputModule } from 'smart-webcomponents-angular/daterangeinput';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CalendarModule, DateRangeInputModule, MultilineTextBoxModule, WindowModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
