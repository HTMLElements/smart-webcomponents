import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownButtonModule } from 'smart-webcomponents-angular/dropdownbutton';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TankModule } from 'smart-webcomponents-angular/tank';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DropDownButtonModule, RadioButtonModule, TankModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
