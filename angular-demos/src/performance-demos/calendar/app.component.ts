import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    let calendars = [];
    // appends 100 calendar on the page
    function appendCalendar() {
        const calendarContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const calendar = document.createElement('smart-calendar');
            calendars.push(calendar);
            containerFragment.appendChild(calendar);
        }
        calendarContainer.appendChild(containerFragment);
        document.body.appendChild(calendarContainer);
    }
    // executes value updates for all date time inputs in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                let day = Math.floor(Math.random() * 28 + 1), date = new Date();
                date.setDate(day);
                calendars[i].select(date);
            }
        }, 10);
    }
    
        appendCalendar();
        runTest();
    

	}	
}