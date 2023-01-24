import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PasswordTextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
