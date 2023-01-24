import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextAreaModule } from 'smart-webcomponents-angular/textarea';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TextAreaModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
