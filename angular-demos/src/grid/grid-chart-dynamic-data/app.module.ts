import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'smart-webcomponents-angular/chart';import { GridModule } from 'smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ChartModule, GridModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
