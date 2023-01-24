import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map!:  MapComponent;

	queryFirstMap: String = 'la'; 
	apiKey: String = '';
	mapTypeFirstMap: String = 'roadmap';
	querySecondMap: String  = 'arc de triunfo ,barcelona,spain';
	mapTypeSecondMap : String =  'satellite';
	
 
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