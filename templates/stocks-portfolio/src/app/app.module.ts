import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { ToastModule } from 'smart-webcomponents-angular/toast';
import { MenuModule } from 'smart-webcomponents-angular/menu';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SplitterModule,
    GridModule,
    ChartModule,
    CalendarModule,
    ListBoxModule,
    DateTimePickerModule,
    ButtonModule,
    RadioButtonModule,
    TextBoxModule,
    ToastModule,
    MenuModule,
    WindowModule,
    DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
