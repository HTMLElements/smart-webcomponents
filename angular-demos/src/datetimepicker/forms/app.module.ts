import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DropDownListModule, ButtonModule, ListBoxModule, DateTimePickerModule, InputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
