import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map:  MapComponent;

	query: String = 'la'; 
	apiKey: String = '';
	mapType: String = 'roadmap';
	
 
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