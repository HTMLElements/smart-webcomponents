import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, CalendarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
