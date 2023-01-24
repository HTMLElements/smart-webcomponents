import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { SliderModule } from 'smart-webcomponents-angular/slider';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ListBoxModule, SliderModule, SwitchButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
