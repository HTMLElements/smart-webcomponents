import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasswordInputModule } from 'smart-webcomponents-angular/passwordinput';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PasswordInputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
