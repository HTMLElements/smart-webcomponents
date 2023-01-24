import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'smart-webcomponents-angular/card';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CardModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
