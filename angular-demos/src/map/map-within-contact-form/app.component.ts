import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';

import { InputComponent} from 'smart-webcomponents-angular/input';

import {ButtonComponent} from 'smart-webcomponents-angular/button'


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
	encapsulation : ViewEncapsulation.None

})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map!:  MapComponent;
	@ViewChild('input', { read:  InputComponent, static: false })input:  InputComponent;
	@ViewChild('button', { read: ButtonComponent, static: false })button:  ButtonComponent;

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