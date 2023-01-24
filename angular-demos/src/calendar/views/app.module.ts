import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarModule } from 'smart-webcomponents-angular/calendar';import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CalendarModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
