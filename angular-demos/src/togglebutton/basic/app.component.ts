import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;
	@ViewChild('togglebutton2', { read: ToggleButtonComponent, static: false }) togglebutton2!: ToggleButtonComponent;
	@ViewChild('togglebutton3', { read: ToggleButtonComponent, static: false }) togglebutton3!: ToggleButtonComponent;
	@ViewChild('togglebutton4', { read: ToggleButtonComponent, static: false }) togglebutton4!: ToggleButtonComponent;
	@ViewChild('togglebutton5', { read: ToggleButtonComponent, static: false }) togglebutton5!: ToggleButtonComponent;
	
 
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