import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimeInputModule } from 'smart-webcomponents-angular/timeinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TimeInputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
