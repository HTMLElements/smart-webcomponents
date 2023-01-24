import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttChartModule, CheckBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
