import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';import { RepeatButtonModule } from 'smart-webcomponents-angular/repeatbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ProgressBarModule, RepeatButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
