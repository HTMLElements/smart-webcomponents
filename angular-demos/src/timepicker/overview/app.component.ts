import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TimePickerComponent } from 'smart-webcomponents-angular/timepicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('timepicker', { read: TimePickerComponent, static: false }) timepicker!: TimePickerComponent;
	@ViewChild('timepicker2', { read: TimePickerComponent, static: false }) timepicker2!: TimePickerComponent;
	@ViewChild('timepicker3', { read: TimePickerComponent, static: false }) timepicker3!: TimePickerComponent;
	@ViewChild('timepicker4', { read: TimePickerComponent, static: false }) timepicker4!: TimePickerComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here

	}	
}