import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { ComboBoxModule } from 'smart-webcomponents-angular/combobox';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CalendarModule, ComboBoxModule, RadioButtonModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
