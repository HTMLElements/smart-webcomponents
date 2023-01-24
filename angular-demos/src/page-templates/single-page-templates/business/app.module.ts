import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { MenuModule } from 'smart-webcomponents-angular/menu';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { InputModule } from 'smart-webcomponents-angular/input';
import { CardModule } from 'smart-webcomponents-angular/card';
import { CarouselModule } from 'smart-webcomponents-angular/carousel';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, MenuModule, TextBoxModule, TabsModule, CardModule, InputModule, CarouselModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
