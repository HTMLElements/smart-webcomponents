import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QRcodeModule } from 'smart-webcomponents-angular/qrcode';
import { ColorPickerModule } from 'smart-webcomponents-angular/colorpicker';
import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, QRcodeModule, ColorPickerModule, NumberInputModule, CheckBoxModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
