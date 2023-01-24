import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('qrcode', { read: QRcodeComponent, static: false }) qrcode: QRcodeComponent;
	@ViewChild('lowOption', { read: RadioButtonComponent, static: false }) lowOption: RadioButtonComponent;
	@ViewChild('highOption', { read: RadioButtonComponent, static: false }) highOption: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
		this.lowOption.addEventListener('click', function() {
			this.qrcode.errorLevel = 'L';
		});

		this.highOption.addEventListener('click', function() {
			this.qrcode.errorLevel = 'H';
		});

	}	
}