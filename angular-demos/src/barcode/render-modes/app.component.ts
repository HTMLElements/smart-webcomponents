import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeComponent } from 'smart-webcomponents-angular/barcode';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('barcodeToRender', { read: BarcodeComponent, static: false }) barcodeToRender!: BarcodeComponent;
	@ViewChild('svgOption', { read: RadioButtonComponent, static: false }) svgOption!: RadioButtonComponent;
	@ViewChild('canvasOption', { read: RadioButtonComponent, static: false }) canvasOption!: RadioButtonComponent;
	
	log: string;
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
  		this.log = this.barcodeToRender.nativeElement.outerHTML;
    }
		
	svgOptionClick(event: Event) {
		this.barcodeToRender.renderAs = 'svg';
		this.log = this.barcodeToRender.nativeElement.outerHTML;
	}
	
	canvasOptionClick(event: Event) {
		this.barcodeToRender.renderAs = 'canvas';
		this.log = this.barcodeToRender.nativeElement.outerHTML;
	}	
}