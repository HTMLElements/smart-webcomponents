import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarcodeModule } from 'smart-webcomponents-angular/barcode';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BarcodeModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
