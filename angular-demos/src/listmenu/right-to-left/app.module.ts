import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListMenuModule } from 'smart-webcomponents-angular/listmenu';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ListMenuModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
