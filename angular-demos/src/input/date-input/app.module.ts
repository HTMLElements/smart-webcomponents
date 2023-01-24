import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DateInputModule } from 'smart-webcomponents-angular/dateinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DateInputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
