import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, KanbanModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
