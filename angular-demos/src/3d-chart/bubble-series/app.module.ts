import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeDChartModule } from 'smart-webcomponents-angular/threedchart';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ThreeDChartModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
