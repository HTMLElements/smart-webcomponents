import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('clearSelection', { read: ButtonComponent, static: false }) clearSelection!: ButtonComponent;
	@ViewChild('today', { read: ButtonComponent, static: false }) today!: ButtonComponent;
	@ViewChild('navBackward', { read: ButtonComponent, static: false }) navBackward!: ButtonComponent;
	@ViewChild('navForward', { read: ButtonComponent, static: false }) navForward!: ButtonComponent;
	@ViewChild('selectDate', { read: ButtonComponent, static: false }) selectDate!: ButtonComponent;
	@ViewChild('disabled', { read: ButtonComponent, static: false }) disabled!: ButtonComponent;
    @ViewChild('dateInput', { read: HTMLInputElement, static: false }) dateInput!: HTMLInputElement;
    
    
 
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
    
        that.clearSelection.addEventListener('click', function () {
            that.calendar.clearSelection();
        });

        that.today.addEventListener('click', function () {
            that.calendar.today();
        });
        
        that.navForward.addEventListener('click', function () {
            that.calendar.navigate(1);
        });
        
        that.navBackward.addEventListener('click', function () {
            that.calendar.navigate(-1);
        });
        
        that.selectDate.addEventListener('click', function () {
			if (that.dateInput.value) {
				that.calendar.select(that.dateInput.value);
			}
		});

        that.disabled.addEventListener('click', function () {
            that.calendar.disabled = !that.calendar.disabled;
        });
	}	
}

