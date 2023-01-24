import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/validator';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { MaskedTextBoxComponent } from 'smart-webcomponents-angular/maskedtextbox';
import { PasswordTextBoxComponent, PasswordTextBox } from 'smart-webcomponents-angular/passwordtextbox';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
    @ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox!: MaskedTextBoxComponent;
    @ViewChild('maskedtextbox2', { read: MaskedTextBoxComponent, static: false }) maskedtextbox2!: MaskedTextBoxComponent;
    @ViewChild('maskedtextbox3', { read: MaskedTextBoxComponent, static: false }) maskedtextbox3!: MaskedTextBoxComponent;
    @ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
    @ViewChild('passwordtextbox2', { read: PasswordTextBoxComponent, static: false }) passwordtextbox2!: PasswordTextBoxComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2!: TextBoxComponent;
    @ViewChild('textbox3', { read: TextBoxComponent, static: false }) textbox3!: TextBoxComponent;

    rules = [
        { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', type: 'required' },
        { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', type: 'stringLength', min: 3, max: 12 },
        { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', type: 'required' },
        { input: '#passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', type: 'stringLength', min: 4, max: 12 },
        { input: '#passwordConfirmInput', message: 'Confirm Password is required!', action: 'keyup, blur', type: 'required' },
        {
            input: '#passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus', type: 'custom',
            validationCallback: (input: PasswordTextBox) => {
                if (input.value === this.passwordtextbox.value) {
                    return true;
                }
                return false;
            }
        },
        { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', type: 'required' },
        { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', type: 'pattern', pattern: /^[^0-9]+$/ },
        { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', type: 'stringLength', min: 3, max: 12 },
        {
            input: '#birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2025.', action: 'change', type: 'custom', validationCallback: () => {
                var date = this.datetimepicker.value;
                var result = date.year() >= 1900 && date.year() <= 2025;
                return result;
            }
        },
        { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', type: 'required' },
        { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', type: 'email' },
        { input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', type: 'pattern', pattern: /\d{3}-\d{2}-\d{4}/ },
        { input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', type: 'phone' },
        { input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', type: 'zipCode' },
        { input: '.genderRadio', message: 'You must select your gender', action: 'change', type: 'required' },
        {
            input: '.genderRadio', message: 'Please choose Male or Female', action: 'change', type: 'custom',
            validationCallback: (input: RadioButton) => {
                return input.value !== 'alien';
            }
        },
        { input: '#terms', message: 'You must agree to the Terms and Conditions', action: 'change', type: 'required' },
    ];

    validator: any;

    submitOnClick() {
        this.validator.validate();
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