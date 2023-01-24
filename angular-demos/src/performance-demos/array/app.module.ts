import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArrayModule } from 'smart-webcomponents-angular/array';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ArrayModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
