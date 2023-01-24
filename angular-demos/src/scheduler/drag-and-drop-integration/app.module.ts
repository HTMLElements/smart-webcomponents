import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TreeModule } from 'smart-webcomponents-angular/tree';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TreeModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
