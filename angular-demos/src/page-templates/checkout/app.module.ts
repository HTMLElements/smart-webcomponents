import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BreadcrumbModule } from 'smart-webcomponents-angular/breadcrumb';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CardModule } from 'smart-webcomponents-angular/card';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BreadcrumbModule, ButtonModule, CardModule, CheckBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
