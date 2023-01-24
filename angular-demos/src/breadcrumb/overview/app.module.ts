import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BreadcrumbModule } from 'smart-webcomponents-angular/breadcrumb';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BreadcrumbModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
