import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DockingLayoutModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
