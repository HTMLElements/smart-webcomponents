import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, GanttChartModule],
    schemas: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
