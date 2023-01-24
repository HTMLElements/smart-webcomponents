import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComboBoxModule } from 'smart-webcomponents-angular/combobox';import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ComboBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
