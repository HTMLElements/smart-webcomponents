import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeComponent } from 'smart-webcomponents-angular/barcode';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('pharmacode', { read: BarcodeComponent, static: false }) pharmacode!: BarcodeComponent;
	@ViewChild('codabar', { read: BarcodeComponent, static: false }) codabar!: BarcodeComponent;
	@ViewChild('code128c', { read: BarcodeComponent, static: false }) code128c!: BarcodeComponent;
	@ViewChild('code128a', { read: BarcodeComponent, static: false }) code128a!: BarcodeComponent;
	@ViewChild('code128b', { read: BarcodeComponent, static: false }) code128b!: BarcodeComponent;
	@ViewChild('msi10', { read: BarcodeComponent, static: false }) msi10!: BarcodeComponent;
	@ViewChild('msi11', { read: BarcodeComponent, static: false }) msi11!: BarcodeComponent;
	@ViewChild('code39', { read: BarcodeComponent, static: false }) code39!: BarcodeComponent;
	
 
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