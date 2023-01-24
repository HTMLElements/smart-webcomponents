import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from 'smart-webcomponents-angular/accordion';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AccordionModule, DropDownListModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
