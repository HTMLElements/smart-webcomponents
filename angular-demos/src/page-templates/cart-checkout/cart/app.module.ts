import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { MenuModule } from 'smart-webcomponents-angular/menu';
import { InputModule } from 'smart-webcomponents-angular/input';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { GridModule } from 'smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, MenuModule, InputModule, WindowModule, GridModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
