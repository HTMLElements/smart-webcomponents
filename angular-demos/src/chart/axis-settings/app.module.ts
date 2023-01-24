import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'smart-webcomponents-angular/chart';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { SliderModule } from 'smart-webcomponents-angular/slider';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ChartModule, CheckBoxModule, RadioButtonModule, SliderModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
