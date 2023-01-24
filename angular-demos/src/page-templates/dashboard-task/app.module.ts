import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { MenuModule } from 'smart-webcomponents-angular/menu';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, SplitterModule, ChartModule, GridModule, WindowModule, DateTimePickerModule, DropDownListModule, MenuModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
