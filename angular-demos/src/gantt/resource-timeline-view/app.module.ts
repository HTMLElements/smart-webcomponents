import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, GanttChartModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
