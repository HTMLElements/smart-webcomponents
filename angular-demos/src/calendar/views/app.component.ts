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
	@ViewChild('portrait', { read: RadioButtonComponent, static: false }) portrait!: RadioButtonComponent;
    @ViewChild('landscape', { read: RadioButtonComponent, static: false }) landscape!: RadioButtonComponent;

 
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
    
        that.landscape.addEventListener('change', function () {
            if (that.landscape.checked) {
                that.calendar.view = 'landscape';
            }
        });

        that.portrait.addEventListener('change', function () {
            if (that.portrait.checked) {
                that.calendar.view = 'portrait';
            }
        });
	}	
}