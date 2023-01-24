import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchButtonModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
