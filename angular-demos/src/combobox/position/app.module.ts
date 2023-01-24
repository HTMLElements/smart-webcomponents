import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComboBoxModule } from 'smart-webcomponents-angular/combobox';import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ComboBoxModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
