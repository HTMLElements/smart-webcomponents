import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
	@ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;
	
 
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