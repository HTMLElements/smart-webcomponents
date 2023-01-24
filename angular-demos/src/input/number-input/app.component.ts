import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumberInputComponent } from 'smart-webcomponents-angular/numberinput';


@Component({
    selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('numberinput', { read: NumberInputComponent, static: false }) numberinput!: NumberInputComponent;
	@ViewChild('numberinput2', { read: NumberInputComponent, static: false }) numberinput2!: NumberInputComponent;
	@ViewChild('numberinput3', { read: NumberInputComponent, static: false }) numberinput3!: NumberInputComponent;
	@ViewChild('numberinput4', { read: NumberInputComponent, static: false }) numericInput!: NumberInputComponent;
	@ViewChild('numberinput5', { read: NumberInputComponent, static: false }) currencyInput!: NumberInputComponent;
	@ViewChild('numberinput6', { read: NumberInputComponent, static: false }) accountingInput!: NumberInputComponent;
	@ViewChild('numberinput7', { read: NumberInputComponent, static: false }) currencyInputLocalized!: NumberInputComponent;
	@ViewChild('numberinput8', { read: NumberInputComponent, static: false }) percentInput!: NumberInputComponent;
	@ViewChild('numberinput9', { read: NumberInputComponent, static: false }) customInput!: NumberInputComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
    	this.numericInput.numberFormat = { minimumFractionDigits: 2 };
    	this.currencyInput.numberFormat = { style: 'currency', currency: 'USD' };
    	this.currencyInputLocalized.numberFormat = { style: 'currency', currency: 'EUR' };
    	this.currencyInputLocalized.locale = 'de';
    	this.accountingInput.numberFormat = { style: 'currency', currency: 'USD', currencySign: 'accounting' };
    	this.percentInput.numberFormat = { style: "percent" };
    	this.customInput.numberFormat = { style: "unit", unit: "liter", unitDisplay: "long" };
    

	}	
}