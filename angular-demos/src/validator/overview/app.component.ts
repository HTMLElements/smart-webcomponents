import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { MaskedTextBoxComponent } from 'smart-webcomponents-angular/maskedtextbox';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { PasswordTextBoxComponent } from 'smart-webcomponents-angular/passwordtextbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	@ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox!: MaskedTextBoxComponent;
	@ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
	@ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
	@ViewChild('passwordtextbox2', { read: PasswordTextBoxComponent, static: false }) passwordtextbox2!: PasswordTextBoxComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
	@ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2!: TextBoxComponent;
	@ViewChild('textbox3', { read: TextBoxComponent, static: false }) textbox3!: TextBoxComponent;
	@ViewChild('textbox4', { read: TextBoxComponent, static: false }) textbox4!: TextBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        'use strict';
        let maxDate = new Date();
        maxDate.setFullYear(2025);
        const rules = [
            //Email
            { input: '#email-validation', message: 'E-mail is required', action: 'keyup, blur', type: 'required' },
            { input: '#email-validation', message: 'Email is invalid', action: 'keyup', type: 'email' },
            //Password
            { input: '#password-validation', message: 'Password is required!', action: 'keyup, blur', type: 'required' },
            //Confirm password
            { input: '#confirm-password-validation', message: 'Confirm Password is required!', action: 'keyup, blur', type: 'required' },
            { input: '#confirm-password-validation', message: '\'Password\' and \'Confirm Password\' do not match.', action: 'keyup, blur', type: 'compare',
                comparisonTarget: function () {
                    let password = document.querySelector('#password-validation');
                    if (password) {
                        return password.value;
                    }
                },
            },
            //Name
            { input: '#name-validation', message: 'Name is required!', action: 'keyup, blur', type: 'required' },
            { input: '#name-validation', message: 'Do not use digits in the Name.', action: 'keyup, blur', type: 'pattern', pattern: /^[^0-9]+$/ },
            { input: '#name-validation', message: 'Name must have at least 2 symbols', action: 'keyup, blur', type: 'stringLength', min: 2 },
            //Date
            //{ input: '#date-validation', message: 'Date of birth is required', action: 'change', type: 'required' },
            { input: '#date-validation', message: 'You must be at least 21 years old', action: 'change', type: 'range', max: maxDate, },
            //Country
            { input: '#country-validation', message: 'Country is required', action: 'change', type: 'required' },
            //City
            { input: '#city-validation', message: 'City is required', action: 'keyup, blur', type: 'required' },
            { input: '#city-validation', message: 'Do not use digits in the City name.', action: 'keyup, blur', type: 'pattern', pattern: /^[^0-9]+$/ },
            { input: '#city-validation', message: 'City must have at least 2 symbols', action: 'keyup, blur', type: 'stringLength', min: 2 },
            //Address
            { input: '#address-validation', message: 'Address is required', action: 'keyup, blur', type: 'required' },
            //Phone
            { input: '#phone-validation', message: 'The phone must have a correct USA phone format', action: 'valuechanged, blur', type: 'pattern', pattern: /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/ },
            //Post  code
            { input: '#post-code-validation', message: 'The post code must contains only digits', action: 'change', type: 'numeric' },
            { input: '#post-code-validation', message: 'The post code must have at least 4 symbols', action: 'change', type: 'stringLength', min: 4 },
            //Terms
            { input: '#termsInput', message: 'You must agree to the Terms and Conditions', action: 'change', type: 'required', },
        ];
        //SmartValidator
        const validator = new window.Smart.Utilities.Validator(rules, '#validationsummary');
        document.querySelector('#register').addEventListener('click', () => {
            validator.validate();
        });
    

	}	
}