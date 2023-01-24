import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PathModule } from 'smart-webcomponents-angular/path';
import { SliderModule } from 'smart-webcomponents-angular/slider';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PathModule, SliderModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
