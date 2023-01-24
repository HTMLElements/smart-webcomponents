import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TankModule } from 'smart-webcomponents-angular/tank';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TankModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
