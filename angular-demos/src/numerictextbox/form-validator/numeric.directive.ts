import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

function validateNumericValue(): ValidatorFn {
    return (control: AbstractControl) => {
        let isValid = control.value > 10 && control.value <= 100;

        if (isValid) {
            return null;
        }
        else {
            return { 'numericValueCheck': 'failed' };
        }
    }
}

@Directive({
    selector: '[appCheckNumericValue]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CheckNumericValueDirective, multi: true }]
})
export class CheckNumericValueDirective implements Validator {
    private valFn: ValidatorFn;

    constructor() {
        this.valFn = validateNumericValue();
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return this.valFn(c);
    }
}