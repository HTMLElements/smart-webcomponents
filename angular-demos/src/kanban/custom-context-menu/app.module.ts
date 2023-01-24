import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { MenuModule } from 'smart-webcomponents-angular/menu';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, KanbanModule, MenuModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
