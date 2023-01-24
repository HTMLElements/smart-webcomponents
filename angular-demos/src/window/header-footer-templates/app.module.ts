import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from 'smart-webcomponents-angular/gauge';
import { PowerButtonModule } from 'smart-webcomponents-angular/powerbutton';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GaugeModule, PowerButtonModule, WindowModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
