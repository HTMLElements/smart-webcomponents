import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this,
            messages = Object.assign({}, that.numerictextbox.messages);

        messages['he'] = {
            'binary': 'בינארי',
            'octal': 'אוקטלית',
            'decimal': 'עשרוני',
            'hexadecimal': 'הקסדצימלי',
            'integerOnly': 'smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.',
            'noInteger': 'smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.',
            'significantPrecisionDigits': 'smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time.'
        };
        that.numerictextbox.messages = messages;
    }
}