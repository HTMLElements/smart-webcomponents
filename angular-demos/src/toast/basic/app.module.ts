import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastModule } from 'smart-webcomponents-angular/toast';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ToastModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
