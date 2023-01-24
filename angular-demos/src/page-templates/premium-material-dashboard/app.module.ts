import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';import { CardModule } from 'smart-webcomponents-angular/card';import { ChartModule } from 'smart-webcomponents-angular/chart';import { DropDownButtonModule } from 'smart-webcomponents-angular/dropdownbutton';import { GridModule } from 'smart-webcomponents-angular/grid';import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';import { SplitterModule } from 'smart-webcomponents-angular/splitter';import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CardModule, ChartModule, DropDownButtonModule, GridModule, ProgressBarModule, SplitterModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
