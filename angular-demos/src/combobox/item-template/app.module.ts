import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComboBoxModule } from 'smart-webcomponents-angular/combobox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ComboBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
