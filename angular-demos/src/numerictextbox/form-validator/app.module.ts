import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';
import { CheckNumericValueDirective } from './numeric.directive';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent, CheckNumericValueDirective],
    imports: [BrowserModule, FormsModule, ButtonModule, InputModule, NumericTextBoxModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }