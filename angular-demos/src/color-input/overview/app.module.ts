import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorInputModule } from 'smart-webcomponents-angular/colorinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ColorInputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
