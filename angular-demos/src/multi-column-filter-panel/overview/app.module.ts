import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultiColumnFilterPanelModule } from 'smart-webcomponents-angular/multicolumnfilterpanel';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MultiColumnFilterPanelModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
