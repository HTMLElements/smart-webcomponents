import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from 'smart-webcomponents-angular/grid';
import { MultiComboInputModule } from 'smart-webcomponents-angular/multicomboinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GridModule, MultiComboInputModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
