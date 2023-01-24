import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FileUploadModule } from 'smart-webcomponents-angular/fileupload';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FileUploadModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
