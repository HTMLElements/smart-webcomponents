import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PathModule } from 'smart-webcomponents-angular/path';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PathModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
