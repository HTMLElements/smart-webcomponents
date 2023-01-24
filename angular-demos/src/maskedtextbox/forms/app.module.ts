import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';

import { AppComponent } from './app.component';

import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

function validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
        let isValid = false;
        if (control && control instanceof FormGroup) {
            let group = control as FormGroup;
            if (group.controls['passwordA'] && group.controls['passwordB']) {
                isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
            }
        }
        if (isValid) {
            return null;
        } else {
            return { 'passwordCheck': 'failed' }
        }
    }
}

@Directive({
    selector: '[appCheckPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]
})
export class CheckPasswordDirective implements Validator {
    private valFn;

    constructor() {
        this.valFn = validatePassword();
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return this.valFn(c);
    }

}

@NgModule({
    declarations: [AppComponent, CheckPasswordDirective],
    imports: [BrowserModule, FormsModule, DropDownListModule, ButtonModule, PasswordTextBoxModule, MaskedTextBoxModule, InputModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
