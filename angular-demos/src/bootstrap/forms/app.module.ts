import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapModule } from 'smart-webcomponents-angular/bootstrap';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BootstrapModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
