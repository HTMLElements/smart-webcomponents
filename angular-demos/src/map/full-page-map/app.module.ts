import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapModule} from 'smart-webcomponents-angular/map';
import { MenuModule } from 'smart-webcomponents-angular/menu';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MapModule, MenuModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
