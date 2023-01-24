import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { EditorModule } from 'smart-webcomponents-angular/editor';

import { AppComponent } from './app.component';
import '@angular/compiler';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, EditorModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
