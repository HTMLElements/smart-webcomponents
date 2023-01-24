import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'smart-webcomponents-angular/card';
import { MenuModule } from 'smart-webcomponents-angular/menu';
import { RatingModule } from 'smart-webcomponents-angular/rating';
import { GridModule } from 'smart-webcomponents-angular/grid';
// import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CardModule, MenuModule, RatingModule, GridModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
