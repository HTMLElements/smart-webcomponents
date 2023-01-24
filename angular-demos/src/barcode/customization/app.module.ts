import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarcodeModule } from 'smart-webcomponents-angular/barcode';
import { ColorPickerModule } from 'smart-webcomponents-angular/colorpicker';
import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BarcodeModule, ColorPickerModule, NumberInputModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
