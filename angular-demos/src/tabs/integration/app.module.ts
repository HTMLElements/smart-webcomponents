import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from 'smart-webcomponents-angular/gauge';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { TankModule } from 'smart-webcomponents-angular/tank';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, GaugeModule, SwitchButtonModule, TabsModule, TankModule, ListBoxModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
