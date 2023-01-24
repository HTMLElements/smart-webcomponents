import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('monthSelector', { read: HTMLInputElement, static: false }) monthSelector: HTMLInputElement;

 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
		const that = this;
		
        that.calendar.selectedDates = ["2020-08-17", "2020-09-6", "2020-09-21", "2020-10-31", "2020-11-25", "2020-12-24", "2021-1-7"];
        that.monthSelector.addEventListener('change', function (event) {
            that.calendar.months = parseInt(that.monthSelector.value);
        });
	}	
}