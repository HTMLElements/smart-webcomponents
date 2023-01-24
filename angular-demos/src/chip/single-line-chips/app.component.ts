import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChipComponent } from 'smart-webcomponents-angular/chip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('chip', { read: ChipComponent, static: false }) chip!: ChipComponent;
	@ViewChild('chip2', { read: ChipComponent, static: false }) chip2!: ChipComponent;
	@ViewChild('chip3', { read: ChipComponent, static: false }) chip3!: ChipComponent;
	@ViewChild('chip4', { read: ChipComponent, static: false }) chip4!: ChipComponent;
	@ViewChild('chip5', { read: ChipComponent, static: false }) chip5!: ChipComponent;
	@ViewChild('chip6', { read: ChipComponent, static: false }) chip6!: ChipComponent;
	@ViewChild('chip7', { read: ChipComponent, static: false }) chip7!: ChipComponent;
	
 
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