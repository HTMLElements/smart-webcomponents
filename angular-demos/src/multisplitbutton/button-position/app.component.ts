import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultiSplitButtonComponent } from 'smart-webcomponents-angular/multisplitbutton';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('multisplitbutton', { read: MultiSplitButtonComponent, static: false }) multisplitbutton: MultiSplitButtonComponent;
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;


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

		that.radiobutton.addEventListener('change', function () {
			that.multisplitbutton.dropDownButtonPosition = 'left';
		});
		that.radiobutton2.addEventListener('change', function () {
			that.multisplitbutton.dropDownButtonPosition = 'right';
		});
	}
}