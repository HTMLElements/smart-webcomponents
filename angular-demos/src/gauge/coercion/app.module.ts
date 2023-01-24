import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { GaugeModule } from 'smart-webcomponents-angular/gauge';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, GaugeModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
