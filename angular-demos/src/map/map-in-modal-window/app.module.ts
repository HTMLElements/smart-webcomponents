import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapModule} from 'smart-webcomponents-angular/map';
import { ButtonModule} from 'smart-webcomponents-angular/button';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, MapModule, ButtonModule, WindowModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
