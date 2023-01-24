import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SortPanelModule } from 'smart-webcomponents-angular/sortpanel';
import { TableModule } from 'smart-webcomponents-angular/table';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SortPanelModule, TableModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
