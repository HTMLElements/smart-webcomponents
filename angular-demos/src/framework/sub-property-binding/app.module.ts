import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MultilineTextBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
