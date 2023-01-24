import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LedModule } from 'smart-webcomponents-angular/led';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, LedModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
