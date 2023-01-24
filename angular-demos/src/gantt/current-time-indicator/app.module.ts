import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GanttChartModule } from 'smart-webcomponents-angular/ganttchart';
import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttChartModule, NumberInputModule, SwitchButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
