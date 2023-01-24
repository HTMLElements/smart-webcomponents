import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultiSplitButtonModule } from 'smart-webcomponents-angular/multisplitbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MultiSplitButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
