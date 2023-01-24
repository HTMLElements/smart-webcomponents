import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpErrorHandler } from './http-error-handler.service';

import { httpInterceptorProviders } from './http-interceptors/index';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { HeroesComponent } from './heroes/heroes.component';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component'
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        GridModule,
        TextBoxModule,
        ButtonModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header',
        }),
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {
            dataEncapsulation: false,
            passThruUnknownUrl: true,
            put204: false // return entity after PUT/update
        }
        )],
    providers: [
        HttpErrorHandler,
        MessageService,
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
