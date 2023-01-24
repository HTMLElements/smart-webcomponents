import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule, DropDownListModule, ButtonModule, InputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
