import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
	@ViewChild('radioButtonLeft', { read: RadioButtonComponent, static: false }) radioButtonLeft!: RadioButtonComponent;
	@ViewChild('radioButtonRight', { read: RadioButtonComponent, static: false }) radioButtonRight!: RadioButtonComponent;

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
			comboBox = that.combobox;

		that.radioButtonLeft.addEventListener('change', function () {
			comboBox.dropDownButtonPosition = 'left';
		});
		that.radioButtonRight.addEventListener('change', function () {
			comboBox.dropDownButtonPosition = 'right';
		});


	}
}