import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { SplitterModule } from 'smart-webcomponents-angular/splitter';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ListBoxModule, SplitterModule, TabsModule, ProgressBarModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
