import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeComponent } from 'smart-webcomponents-angular/barcode';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('barcodeToExport', { read: BarcodeComponent, static: false }) barcodeToExport!: BarcodeComponent;
	@ViewChild('btnSVG', { read: ButtonComponent, static: false }) btnSVG!: ButtonComponent;
	@ViewChild('btnPNG', { read: ButtonComponent, static: false }) btnPNG!: ButtonComponent;
	@ViewChild('btnJPG', { read: ButtonComponent, static: false }) btnJPG!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }
		
	png() {
		this.barcodeToExport['export']('png');
	}
	
	svg() {
		this.barcodeToExport['export']('svg');
	}

	jpg() {
		this.barcodeToExport['export']('jpg');
	}

}