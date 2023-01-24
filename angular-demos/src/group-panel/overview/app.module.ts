import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GroupPanelModule } from 'smart-webcomponents-angular/grouppanel';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GroupPanelModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
