import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule,  ],
    bootstrap: [ AppComponent ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
