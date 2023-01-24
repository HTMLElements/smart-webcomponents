import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardViewModule } from 'smart-webcomponents-angular/cardview';import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CardViewModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
