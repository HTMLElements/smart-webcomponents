import { Component, ViewChild, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Directive, Input } from "@angular/core";
import {
	Validator,
	ValidationErrors,
	FormGroup,
	NG_VALIDATORS,
	NgForm,
	Validators
} from "@angular/forms";


import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

export class Shipment {
	constructor(
		public productName: string,
		public shippingAddress: string,
		public quantity: string | number
	) { }
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	productType = ['Bananas', 'Oranges', 'Coffee', 'Sugar', 'Cocoa', 'Spices', 'Silk'];
	model = new Shipment(this.productType[2], '552  Whitetail Lane, Dallas, TX', null);
	submitted = false;

	onSubmit() { this.submitted = true; }

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
	}

	newShipment() {
		this.model = new Shipment('', '', null);
	}

	get diagnostic() { return JSON.stringify(this.model); }
}