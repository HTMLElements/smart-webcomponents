import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { TreeModule } from 'smart-webcomponents-angular/tree';
import { ChartModule } from 'smart-webcomponents-angular/chart';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, SplitterModule, TreeModule, ChartModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
