import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'smart-webcomponents-angular/chart';import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';import { SliderModule } from 'smart-webcomponents-angular/slider';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ChartModule, CheckBoxModule, SliderModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
