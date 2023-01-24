import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { TreeModule } from 'smart-webcomponents-angular/tree';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, MultilineTextBoxModule, TreeModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
