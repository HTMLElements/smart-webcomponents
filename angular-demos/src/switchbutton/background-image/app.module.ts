import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SwitchButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
