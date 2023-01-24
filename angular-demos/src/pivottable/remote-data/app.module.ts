import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PivotTableModule } from 'smart-webcomponents-angular/pivottable';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, PivotTableModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
