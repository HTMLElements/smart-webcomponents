import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, KanbanModule, WindowModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
