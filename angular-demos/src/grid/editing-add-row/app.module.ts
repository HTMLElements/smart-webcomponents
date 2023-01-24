import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from 'smart-webcomponents-angular/grid';import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GridModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
