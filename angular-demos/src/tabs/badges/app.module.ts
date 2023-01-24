import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { TabsModule } from 'smart-webcomponents-angular/tabs';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ListBoxModule, TabsModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
