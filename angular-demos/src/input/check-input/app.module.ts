import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { CheckInputModule } from 'smart-webcomponents-angular/checkinput';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CheckBoxModule, CheckInputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
