import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeDChartModule } from 'smart-webcomponents-angular/threedchart';
import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import {ColorPickerModule} from 'smart-webcomponents-angular/colorpicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ThreeDChartModule, NumberInputModule, ButtonModule, CheckBoxModule, ColorPickerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
