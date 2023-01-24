import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
	@ViewChild('multilinetextbox2', { read: MultilineTextBoxComponent, static: false }) multilinetextbox2: MultilineTextBoxComponent;
	@ViewChild('multilinetextbox3', { read: MultilineTextBoxComponent, static: false }) multilinetextbox3: MultilineTextBoxComponent;
	@ViewChild('multilinetextbox4', { read: MultilineTextBoxComponent, static: false }) multilinetextbox4: MultilineTextBoxComponent;
	
 
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