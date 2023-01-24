import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'smart-webcomponents-angular/chart';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ChartModule, CheckBoxModule, NumericTextBoxModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
