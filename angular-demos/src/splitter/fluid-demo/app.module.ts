import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SplitterModule } from 'smart-webcomponents-angular/splitter';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SplitterModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
