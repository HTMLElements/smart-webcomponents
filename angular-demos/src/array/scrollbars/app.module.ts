import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrayModule } from 'smart-webcomponents-angular/array';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ArrayModule, ButtonModule, CheckBoxModule  ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
