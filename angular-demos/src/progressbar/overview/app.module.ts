import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ProgressBarModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
