import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { InputModule } from 'smart-webcomponents-angular/input';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, KanbanModule, InputModule, NumericTextBoxModule, ButtonModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
