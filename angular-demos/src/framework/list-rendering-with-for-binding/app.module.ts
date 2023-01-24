import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'smart-webcomponents-angular/source/smart.element';
import { App } from 'smart-webcomponents-angular/source/smart.core';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule,  ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
