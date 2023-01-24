import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorPickerModule } from 'smart-webcomponents-angular/colorpicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ColorPickerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
