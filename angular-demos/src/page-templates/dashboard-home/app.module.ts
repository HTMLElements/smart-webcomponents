import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CardModule } from 'smart-webcomponents-angular/card';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { GridModule } from 'smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SplitterModule, ButtonModule, CardModule, ChartModule, GridModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
