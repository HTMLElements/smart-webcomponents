import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { ChipModule } from 'smart-webcomponents-angular/chip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, MultilineTextBoxModule, RadioButtonModule, WindowModule, ChipModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
