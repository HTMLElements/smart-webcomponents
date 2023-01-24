import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { TooltipModule } from 'smart-webcomponents-angular/tooltip';
import { CardModule } from 'smart-webcomponents-angular/card';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CheckBoxModule, TextBoxModule, TooltipModule, CardModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
