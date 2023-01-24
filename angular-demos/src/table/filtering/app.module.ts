import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'smart-webcomponents-angular/table';

import { AppComponent } from './app.component';
import '@angular/compiler';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TableModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
