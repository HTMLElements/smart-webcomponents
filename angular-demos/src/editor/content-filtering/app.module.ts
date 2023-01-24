import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputModule } from 'smart-webcomponents-angular/input';
import { MultiComboInputModule } from 'smart-webcomponents-angular/multicomboinput';
import { EditorModule } from 'smart-webcomponents-angular/editor';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, InputModule, MultiComboInputModule, EditorModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
