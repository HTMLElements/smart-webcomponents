import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';
import { NumberInputComponent } from 'smart-webcomponents-angular/numberinput';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrcodeToStyle', { read: QRcodeComponent, static: false }) qrcodeToStyle!: QRcodeComponent;
	@ViewChild('backgroundColorPicker', { read: ColorPickerComponent, static: false }) backgroundColorPicker!: ColorPickerComponent;
	@ViewChild('lineColorPicker', { read: ColorPickerComponent, static: false }) lineColorPicker!: ColorPickerComponent;
	@ViewChild('sqaureWidthInput', { read: NumberInputComponent, static: false }) sqaureWidthInput!: NumberInputComponent;
	@ViewChild('labelDisplayCheck', { read: CheckBoxComponent, static: false }) labelDisplayCheck!: CheckBoxComponent;
	@ViewChild('labelColorPicker', { read: ColorPickerComponent, static: false }) labelColorPicker!: ColorPickerComponent;
	@ViewChild('labelFontSizeInput', { read: NumberInputComponent, static: false }) labelFontSizeInput!: NumberInputComponent;
	@ViewChild('applyBtn', { read: ButtonComponent, static: false }) applyBtn!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
	
	apply() {
		this.qrcodeToStyle.backgroundColor = this.backgroundColorPicker.value;
		this.qrcodeToStyle.lineColor = this.lineColorPicker.value;
		this.qrcodeToStyle.squareWidth = this.sqaureWidthInput.value;
		this.qrcodeToStyle.displayLabel = this.labelDisplayCheck.checked;
		this.qrcodeToStyle.labelColor = this.labelColorPicker.value;
		this.qrcodeToStyle.labelFontSize = this.labelFontSizeInput.value;
	}	
}