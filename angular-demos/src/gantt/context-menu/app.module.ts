import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';
import { MenuModule } from 'smart-webcomponents-angular/menu';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttChartModule, MenuModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
