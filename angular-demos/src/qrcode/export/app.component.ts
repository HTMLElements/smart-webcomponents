import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrcodeToExport', { read: QRcodeComponent, static: false }) qrcodeToExport!: QRcodeComponent;
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
		this.qrcodeToExport['export']('png');
	}
	
	svg() {
		this.qrcodeToExport['export']('svg');
	}

	jpg() {
		this.qrcodeToExport['export']('jpg');
	}
}