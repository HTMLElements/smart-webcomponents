import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DateTimePickerModule } from 'smart-webcomponents-angular/datetimepicker';
import { FormModule } from 'smart-webcomponents-angular/form';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, InputModule, DateTimePickerModule, FormModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
