import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
	@ViewChild('numerictextbox2', { read: NumericTextBoxComponent, static: false }) numerictextbox2!: NumericTextBoxComponent;
	@ViewChild('numerictextbox3', { read: NumericTextBoxComponent, static: false }) numerictextbox3!: NumericTextBoxComponent;
	@ViewChild('numerictextbox4', { read: NumericTextBoxComponent, static: false }) numerictextbox4!: NumericTextBoxComponent;
	@ViewChild('numerictextbox5', { read: NumericTextBoxComponent, static: false }) numerictextbox5!: NumericTextBoxComponent;
	@ViewChild('numerictextbox6', { read: NumericTextBoxComponent, static: false }) numerictextbox6!: NumericTextBoxComponent;
	@ViewChild('numerictextbox7', { read: NumericTextBoxComponent, static: false }) numerictextbox7!: NumericTextBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    

	}	
}