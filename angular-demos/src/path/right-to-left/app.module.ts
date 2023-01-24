import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PathModule } from 'smart-webcomponents-angular/path';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PathModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
