import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SliderModule } from 'smart-webcomponents-angular/slider';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SliderModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
