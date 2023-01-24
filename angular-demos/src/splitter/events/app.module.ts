import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SplitterModule, DropDownListModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
