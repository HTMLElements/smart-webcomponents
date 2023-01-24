import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputModule } from 'smart-webcomponents-angular/input';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { ColorInputModule } from 'smart-webcomponents-angular/colorinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, InputModule, SwitchButtonModule, SchedulerModule, ColorInputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
