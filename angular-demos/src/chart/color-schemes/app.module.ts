import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'smart-webcomponents-angular/chart';import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ChartModule, CheckBoxModule, DropDownListModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
