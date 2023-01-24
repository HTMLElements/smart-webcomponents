import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from 'smart-webcomponents-angular/layout';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, LayoutModule, ButtonModule, CalendarModule, ChartModule, DateTimePickerModule, GridModule, ListBoxModule, RadioButtonModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
