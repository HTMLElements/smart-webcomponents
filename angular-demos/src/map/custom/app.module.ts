import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapModule} from 'smart-webcomponents-angular/map';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MapModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
