import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from 'smart-webcomponents-angular/accordion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
