import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CountryInputModule } from 'smart-webcomponents-angular/countryinput';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CountryInputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
