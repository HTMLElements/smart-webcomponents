import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',

})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map:  MapComponent;

	query: String = 'vitosha,cherni vrah'; 
	mode: String = 'view';
	zoom : String = '15';
	mapType : String = 'terrain';
	apiKey: String = '';
	heading: String = '160';
	pitch: String = '20';
	
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