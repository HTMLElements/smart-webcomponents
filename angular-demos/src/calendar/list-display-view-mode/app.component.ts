import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
	
 
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
        const calendar = document.querySelector('smart-calendar');
        
        that.radiobutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                calendar.displayMode = 'month';
            }
        });

        that.radiobutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                calendar.displayMode = 'year';
            }
        });

        that.radiobutton3.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                calendar.displayMode = 'decade';
            }
        });

        that.calendar.addEventListener('displayModeChange', function (event) {
            if (that.calendar.displayMode === 'month') {
                that.radiobutton.checked = true;
            }
            else if (that.calendar.displayMode === 'year') {
                that.radiobutton2.checked = true;
            }
            else {
                that.radiobutton3.checked = true;
            }
        });

	}	
}