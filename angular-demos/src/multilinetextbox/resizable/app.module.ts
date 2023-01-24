import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MultilineTextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
