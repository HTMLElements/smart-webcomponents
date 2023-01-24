import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilterBuilderModule } from 'smart-webcomponents-angular/filterbuilder';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FilterBuilderModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
