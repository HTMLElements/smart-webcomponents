import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('minInput', { read: HTMLInputElement, static: false }) minInput!: HTMLInputElement;
	@ViewChild('maxInput', { read: HTMLInputElement, static: false }) maxInput!: HTMLInputElement;
	
 
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

        that.minInput.addEventListener('change', function (event: CustomEvent) {
            that.calendar.min = that.minInput.value;
        });
		
		that.maxInput.addEventListener('change', function (event: CustomEvent) {
            that.calendar.max = that.maxInput.value;
        });
	}	
}