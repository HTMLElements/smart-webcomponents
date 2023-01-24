import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { RatingModule } from 'smart-webcomponents-angular/rating';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SchedulerModule, RatingModule, ProgressBarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
