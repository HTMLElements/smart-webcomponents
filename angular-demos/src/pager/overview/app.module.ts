import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagerModule } from 'smart-webcomponents-angular/pager';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PagerModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
