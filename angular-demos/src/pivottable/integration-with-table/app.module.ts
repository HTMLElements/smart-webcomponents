import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';import { TableModule } from 'smart-webcomponents-angular/table';import { PivotTableModule } from 'smart-webcomponents-angular/pivottable';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SwitchButtonModule, TableModule, PivotTableModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
