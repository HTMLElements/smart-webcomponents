import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeComponent } from 'smart-webcomponents-angular/barcode';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';
import { NumberInputComponent } from 'smart-webcomponents-angular/numberinput';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('barcodeToStyle', { read: BarcodeComponent, static: false }) barcodeToStyle!: BarcodeComponent;
	@ViewChild('backgroundColorPicker', { read: ColorPickerComponent, static: false }) backgroundColorPicker!: ColorPickerComponent;
	@ViewChild('lineColorPicker', { read: ColorPickerComponent, static: false }) lineColorPicker!: ColorPickerComponent;
	@ViewChild('lineWidthInput', { read: NumberInputComponent, static: false }) lineWidthInput!: NumberInputComponent;
	@ViewChild('lineHeightInput', { read: NumberInputComponent, static: false }) lineHeightInput!: NumberInputComponent;
	@ViewChild('labelColorPicker', { read: ColorPickerComponent, static: false }) labelColorPicker!: ColorPickerComponent;
	@ViewChild('labelFontSizeInput', { read: NumberInputComponent, static: false }) labelFontSizeInput!: NumberInputComponent;
	@ViewChild('applyBtn', { read: ButtonComponent, static: false }) applyBtn!: ButtonComponent;
	
    apply() {
		this.barcodeToStyle.backgroundColor = this.backgroundColorPicker.value;
		this.barcodeToStyle.lineColor = this.lineColorPicker.value;
		this.barcodeToStyle.lineWidth = this.lineWidthInput.value;
		this.barcodeToStyle.lineHeight = this.lineHeightInput.value;
		this.barcodeToStyle.labelColor = this.labelColorPicker.value;
		this.barcodeToStyle.labelFontSize = this.labelFontSizeInput.value;
	}
	
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }
}