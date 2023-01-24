import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChipModule } from 'smart-webcomponents-angular/chip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ChipModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
