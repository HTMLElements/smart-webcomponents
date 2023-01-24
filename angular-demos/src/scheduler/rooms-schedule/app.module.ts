import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SchedulerModule, WindowModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
