import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhoneInputModule } from 'smart-webcomponents-angular/phoneinput';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PhoneInputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
