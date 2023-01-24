import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { TankModule } from 'smart-webcomponents-angular/tank';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, NumericTextBoxModule, TankModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
