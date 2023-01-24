import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputModule } from 'smart-webcomponents-angular/input';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, InputModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
