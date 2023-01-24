import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { ChartModule } from 'smart-webcomponents-angular/chart';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, SplitterModule, RadioButtonModule, ChartModule,
        TextBoxModule, DateTimePickerModule, GridModule, ListBoxModule, CalendarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
