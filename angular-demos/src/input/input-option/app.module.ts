import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultiComboInputModule } from 'smart-webcomponents-angular/multicomboinput';
import { InputModule } from 'smart-webcomponents-angular/input';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MultiComboInputModule, InputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
