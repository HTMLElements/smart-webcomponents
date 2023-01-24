import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollBarModule } from 'smart-webcomponents-angular/scrollbar';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ScrollBarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
