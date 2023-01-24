import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { ToastModule } from 'smart-webcomponents-angular/toast';

import { AppComponent } from './app.component';

import { ToastService } from './toast.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, ToastModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent],
    providers: [ToastService]
})

export class AppModule { }
