import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputModule } from 'smart-webcomponents-angular/input';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, InputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
