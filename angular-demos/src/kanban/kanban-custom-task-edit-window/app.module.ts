import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { NumberInputModule } from 'smart-webcomponents-angular/numberinput';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DateInputModule } from 'smart-webcomponents-angular/dateinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, KanbanModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
