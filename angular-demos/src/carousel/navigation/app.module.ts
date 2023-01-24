import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';import { CarouselModule } from 'smart-webcomponents-angular/carousel';import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CarouselModule, CheckBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
