import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeDChartModule } from 'smart-webcomponents-angular/threedchart';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ThreeDChartModule, ButtonModule, CheckBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
