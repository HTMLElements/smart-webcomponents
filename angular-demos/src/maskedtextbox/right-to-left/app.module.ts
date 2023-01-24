import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MaskedTextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
