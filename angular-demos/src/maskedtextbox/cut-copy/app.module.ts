import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, MaskedTextBoxModule, TextBoxModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
