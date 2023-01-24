import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, NumberInputModule, SwitchButtonModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
