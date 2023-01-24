import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CardModule } from 'smart-webcomponents-angular/card';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { TabsModule } from 'smart-webcomponents-angular/tabs';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CardModule, ChartModule, GridModule, SplitterModule, TabsModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
