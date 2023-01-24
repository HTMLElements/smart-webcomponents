import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ValidatorModule } from 'smart-webcomponents-angular/validator';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ValidatorModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
