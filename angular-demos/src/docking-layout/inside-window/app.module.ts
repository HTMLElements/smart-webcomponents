import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { TreeModule } from 'smart-webcomponents-angular/tree';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { GaugeModule } from 'smart-webcomponents-angular/gauge';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DockingLayoutModule, WindowModule, TreeModule, MultilineTextBoxModule, TextBoxModule, GaugeModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
