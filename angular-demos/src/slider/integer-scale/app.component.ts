import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
	@ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
	
 
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