import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, TextBoxModule, PasswordTextBoxModule, DropDownListModule, ButtonModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, DynamicFormQuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
