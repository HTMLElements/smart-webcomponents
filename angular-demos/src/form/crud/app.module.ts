import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from 'smart-webcomponents-angular/form';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FormModule, ButtonModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
