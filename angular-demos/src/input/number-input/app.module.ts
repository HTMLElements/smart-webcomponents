import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, NumberInputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
