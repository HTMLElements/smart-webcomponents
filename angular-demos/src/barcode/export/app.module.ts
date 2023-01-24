import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarcodeModule } from 'smart-webcomponents-angular/barcode';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BarcodeModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
