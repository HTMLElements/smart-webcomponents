import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MaskedTextBoxComponent } from 'smart-webcomponents-angular/maskedtextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox!: MaskedTextBoxComponent;
	
 
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