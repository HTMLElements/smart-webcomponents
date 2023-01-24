import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/validator';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('maleRadio', { read: ElementRef, static: false }) maleRadio!: ElementRef;
    @ViewChild('femaleRadio', { read: ElementRef, static: false }) femaleRadio!: ElementRef;
    @ViewChild('alienRadio', { read: ElementRef, static: false }) alienRadio!: ElementRef;

    rules = [
        { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', type: 'required' },
        { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', type: 'stringLength', min: 3, max: 12 },
        { input: '#accessPassword', message: 'Password field is required', action: 'keyup', type: 'required' },
        { input: '#accessPassword', message: 'Your password must be between at least 3 characters!', action: 'keyup, blur', type: 'stringLength', min: 3, },
        {
            input: '#accessPassword', message: 'Your password is too weak', action: 'keyup', type: 'compare',
            comparisonTarget: function () {
                return '123';
            },
            comparisonType: '!==',
        },
        { input: '#ageInput', message: 'Age field is required!', action: 'keyup, blur', type: 'required' },
        { input: '#ageInput', message: 'The age field must contains only digits', action: 'keyup, blur', type: 'numeric' },
        {
            input: '#ageInput', message: 'You are not between 10 and 20 years old', action: 'keyup, blur', type: 'compare',
            comparisonTarget: function () {
                return '10';
            },
            comparisonType: '>=',
        },
        {
            input: '#ageInput', message: 'You are not between 10 and 20 years old', action: 'keyup, blur', type: 'compare',
            comparisonTarget: function () {
                return '20';
            },
            comparisonType: '<=',
        },
        {
            input: '#evenInput', message: 'Please enter an even one.', action: 'keyup, blur', type: 'custom', validationCallback(e: HTMLInputElement) {
                return parseFloat(e.value) % 2 === 0;
            }
        },
        { input: '#evenInput', message: 'The even number must be between 20 and 50', action: 'keyup, blur', type: 'range', min: 20, max: 50 },
        {
            input: '#calcInput', action: 'keyup, blur', type: 'compare',
            comparisonTarget: function () {
                return '2';
            },
            comparisonType: '===',
            message: 'Try again!'
        },
        { input: '.genderRadio', message: 'You must select your gender', action: 'change', type: 'required' },
        {
            input: '.genderRadio', message: 'Please choose Male or Female', action: 'change', type: 'custom',
            validationCallback: () => {
                let checkboxes = [this.maleRadio, this.femaleRadio, this.alienRadio];
                let result = true;
                if ((checkboxes) && (checkboxes.length > 1)) {
                    for (let i = 0; i < checkboxes.length; i++) {
                        let checkbox = checkboxes[i];
                        if (checkbox.nativeElement.checked && (checkbox.nativeElement.value === 'alien')) {
                            result = false;
                        }
                    }
                }
                return result;
            }
        },
        { input: '#terms', action: 'change', type: 'required', message: 'You must agree to the Terms and Conditions' },
    ];

    validator: any;

    registerOnClick() {
        this.validator.validate();
    }

    resetOnClick() {
        this.validator.reset();
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.validator = new Smart.Utilities.Validator(that.rules, '#validationsummary');
    }
}