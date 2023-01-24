import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('calendar2', { read: CalendarComponent, static: false }) calendar2!: CalendarComponent;
	@ViewChild('calendar3', { read: CalendarComponent, static: false }) calendar3!: CalendarComponent;
	@ViewChild('calendar4', { read: CalendarComponent, static: false }) calendar4!: CalendarComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here.

	}	
}