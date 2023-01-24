import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { LedComponent } from 'smart-webcomponents-angular/led';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('led', { read: LedComponent, static: false }) led!: LedComponent;
	@ViewChild('led2', { read: LedComponent, static: false }) led2!: LedComponent;
	@ViewChild('led3', { read: LedComponent, static: false }) led3!: LedComponent;
	
 
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