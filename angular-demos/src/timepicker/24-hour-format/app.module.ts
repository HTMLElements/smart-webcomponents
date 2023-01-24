import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimePickerModule } from 'smart-webcomponents-angular/timepicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TimePickerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
