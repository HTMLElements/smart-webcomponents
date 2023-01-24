import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
	@ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2: SwitchButtonComponent;
	
 
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
    
        this.switchbutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.animation = 'advanced';
            }
            else {
                that.calendar.animation = 'none';
            }
            
            document.getElementById('log').innerHTML = 'smartCalendar animations ' + (event.detail.value ? 'On' : 'Off');
        });
        this.switchbutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsNavigationMode = 'landscape';
            }
            else {
                that.calendar.scrollButtonsNavigationMode = 'portrait';
            }
        });
    

	}	
}