import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TextBoxModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
