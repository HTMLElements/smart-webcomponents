import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrcode', { read: QRcodeComponent, static: false }) qrcode: QRcodeComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // no code

	}	
}