import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar'
;import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { TooltipModule } from 'smart-webcomponents-angular/tooltip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ProgressBarModule, RadioButtonModule, TooltipModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
