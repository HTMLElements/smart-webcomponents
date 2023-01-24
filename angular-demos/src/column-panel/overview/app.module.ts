import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColumnPanelModule } from 'smart-webcomponents-angular/columnpanel';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ColumnPanelModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
