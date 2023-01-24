import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) array!: ArrayComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	elementTemplate(element, dimensions): void {
        element.inputFormat = 'complex';
    }
	
	init(): void {
		// init code.	    
	}	
}