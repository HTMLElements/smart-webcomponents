import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	restrictedDates: string[] = ["2020-7-25", "2020-7-15","2021-1-1"];
 
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