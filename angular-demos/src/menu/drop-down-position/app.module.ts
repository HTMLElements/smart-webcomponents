import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from 'smart-webcomponents-angular/menu';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, MenuModule, RadioButtonModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
