import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from 'smart-webcomponents-angular/menu';
import { TreeModule } from 'smart-webcomponents-angular/tree';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MenuModule, TreeModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
