import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, NumericTextBoxModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
