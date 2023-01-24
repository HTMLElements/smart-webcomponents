import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from 'smart-webcomponents-angular/qrcode';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrCodeToRender', { read: QRcodeComponent, static: false }) qrCodeToRender!: QRcodeComponent;
	@ViewChild('svgOption', { read: RadioButtonComponent, static: false }) svgOption!: RadioButtonComponent;
	@ViewChild('canvasOption', { read: RadioButtonComponent, static: false }) canvasOption!: RadioButtonComponent;
	
 	log: string;
 
	ngOnInit(): void {
		// onInit code.
	}


	ngAfterViewInit(): void {
		// afterViewInit code.
  		this.log = this.qrCodeToRender.nativeElement.outerHTML;
    }
		
	svgOptionClick(event: Event) {
		this.qrCodeToRender.renderAs = 'svg';
		this.log = this.qrCodeToRender.nativeElement.outerHTML;
	}
	
	canvasOptionClick(event: Event) {
		this.qrCodeToRender.renderAs = 'canvas';
		this.log = this.qrCodeToRender.nativeElement.outerHTML;
	}	
}