import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QRcodeModule } from 'smart-webcomponents-angular/qrcode';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, QRcodeModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
