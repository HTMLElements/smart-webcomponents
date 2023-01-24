import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PathModule } from 'smart-webcomponents-angular/path';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PathModule, RadioButtonModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
