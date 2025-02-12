import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { EditorModule } from 'smart-webcomponents-angular/editor';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, WindowModule, EditorModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
