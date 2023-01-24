import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from 'smart-webcomponents-angular/accordion';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CardModule } from 'smart-webcomponents-angular/card';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { GridModule } from 'smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, AccordionModule, ButtonModule, CardModule, GridModule, 
        DateTimePickerModule, DropDownListModule, NumericTextBoxModule, RadioButtonModule, TabsModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
