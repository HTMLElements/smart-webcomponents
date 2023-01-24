import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { QueryBuilderModule } from 'smart-webcomponents-angular/querybuilder';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DropDownListModule, QueryBuilderModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
