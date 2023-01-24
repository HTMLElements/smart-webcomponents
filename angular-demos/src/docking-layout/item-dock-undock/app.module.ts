import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, DockingLayoutModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
