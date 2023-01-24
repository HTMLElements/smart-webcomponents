import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { EditorModule } from 'smart-webcomponents-angular/editor';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, EditorModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
