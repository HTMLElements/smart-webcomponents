import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WindowModule } from 'smart-webcomponents-angular/window';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, WindowModule, DropDownListModule, SplitterModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
