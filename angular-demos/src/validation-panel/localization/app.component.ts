import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
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
        let locale;
        let messages;
        locale = 'bg';
        messages = {
            'bg': {
                // Texts
                criteriaText: 'Критерии:',
                onInavlidData: 'При невелидни данни:',
                appearance: 'Поведение:',
                showWarning: 'Покажи грешки',
                rejectInput: 'Отхвърли стойността',
                showValidationHelpText: 'Покажи тест при грешки:',
                cancelButtonText: 'откажи',
                removeValidationButtonText: 'премахни валидация',
                saveButtonText: 'запази',
                andTextBetweenInput: 'и',
                expectTrue: 'Очаква стойност \'true\'',
                expectFalse: 'Очаква стойност \'false\'',
                resetButtonText: 'Върни',
                //DataType Number
                NumberDataTypeText: 'Число',
                //DataType Number Conditions
                Number_between: 'между',
                Number_not_between: 'не между',
                Number_less_than: 'по-малко от',
                Number_less_than_or_equal_to: 'по-малко или равно на',
                Number_greater_than: 'по-голямо от',
                Number_greater_than_or_equal_to: 'по-голямо или равно на',
                Number_equal_to: 'равно на',
                Number_not_equal_to: 'различно от',
                //DataType Text
                TextDataTypeText: 'Текст',
                //DataType Text Conditions
                Text_contains: 'съдържа',
                Text_does_not_contain: 'не съдържа',
                Text_equals: 'равен на',
                Text_is_valid_email: 'валиден имейл',
                Text_is_valid_url: 'валиден url линк',
                //DataType Date
                DateDataTypeText: 'Дата',
                //DataType Date Conditions
                Date_is_valid_date: 'валидна дата',
                Date_equal_to: 'равна на',
                Date_before: 'преди',
                Date_on_or_before: 'на тази дата или преди нея',
                Date_after: 'след',
                Date_on_or_after: 'на тази дата или след',
                Date_between: 'между',
                Date_not_between: 'не между',
                //DataType Boolean
                BooleanDataTypeText: 'Булев тип',
                //Number
                numberBetweenValidationText: 'Въведете число между',
                numberNotBetweenValidationText: 'Въведете число, не между',
                numberLessThanValidationText: 'Въведете число, по-малко от',
                numberLessThanOrEqualToValidationText: 'Въведете число, по-малко от или равно на',
                numberGreaterThanValidationText: 'Въведете число по-голямо от',
                numberGreaterThanOrEqualToValidationText: 'Въведете число по-голямо от или равно на',
                numberEqualToValidationText: 'Въведете число равно на',
                numberNotEqualToValidationText: 'Въведете число различно от',
                //Text
                textContainsValidationText: 'Въведете текст съдържащ',
                textNotContainsValidationText: 'Въведете текст, който не съдържа',
                textEqualsValidationText: 'Въведете точно конкретния текст',
                textValidEmailValidationText: 'Въведете валиден имейл',
                textValidUrlValidationText: 'Въведете валиден url линк',
                //Date
                dateValidDateValidationText: 'Въведете валидна дата',
                dateEqualToValidationText: 'Въведете дата равна на',
                dateBeforeValidationText: 'Въведете дата преди',
                dateOnOrBeforeValidationText: 'Въведете дата равна на или преди',
                dateAfterValidationText: 'Въведете дата след',
                dateOnOrAfterValidationText: 'Въведете дата равна на или след',
                dateBetweenValidationText: 'Въведете дата между',
                dateNotBetweenValidationText: 'Въведете дата, която не е между',
                //Boolean
                booleanValidationText: 'Въведете \'true\' или \'false\'',
            },
        };
        //ValidationPanel
        const validationPanel = new Smart.Utilities.ValidationPanel('.data-validation-panel', locale, messages);
        //validationPanel.detach();
        // On Submit
        document.querySelector('.smart-save-footer-button').addEventListener('click', () => appendDataValidationFormat(validationPanel));
    };
    let appendDataValidationFormat = (validationPanel) => {
        'use strict';
        let format = validationPanel.getDataValidationFormat();
        if (format) {
            document.querySelector('.custom-format-holder').innerHTML = format;
        }
    

	}	
}