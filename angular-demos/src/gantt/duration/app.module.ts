import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttChartModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
