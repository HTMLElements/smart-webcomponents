import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrCodeToValidate', { read: QRcodeComponent, static: false }) qrCodeToValidate: QRcodeComponent;
	@ViewChild('btn1', { read: ButtonComponent, static: false }) btn1: ButtonComponent;
	value: string;
	patternValidity: string;
	length: string;
	chars: string;
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }
		
	invalid(event: CustomEvent) {
		const detail = event.detail;
		this.value = detail.value;
		this.patternValidity = detail.patternValidity;
		this.length = detail.lengthValidity;
		this.chars = detail.invalidCharacters.join(', ');
	}
	
	validate(event: Event) {
		this.qrCodeToValidate.value = "ABCDEFFГФЩЪ";
	}
}