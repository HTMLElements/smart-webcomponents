import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WindowModule } from 'smart-webcomponents-angular/window';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, WindowModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
