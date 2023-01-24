import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { InputModule } from 'smart-webcomponents-angular/input';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, KanbanModule, WindowModule, InputModule, PasswordTextBoxModule, ButtonModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
