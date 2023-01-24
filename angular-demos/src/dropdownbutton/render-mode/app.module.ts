import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownButtonModule } from 'smart-webcomponents-angular/dropdownbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DropDownButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
