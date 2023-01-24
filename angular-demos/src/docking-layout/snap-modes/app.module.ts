import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DockingLayoutModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
