import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, GridModule, DropDownListModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
