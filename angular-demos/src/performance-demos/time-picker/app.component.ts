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
	    
    let timePickersList = [];
    // appends 100 time pickers on the page
    function appendTimePickers() {
        const timePickersContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newtimePicker = document.createElement('smart-time-picker');
            newtimePicker.calendarButton = true;
            timePickersList.push(newtimePicker);
            containerFragment.appendChild(newtimePicker);
        }
        timePickersContainer.appendChild(containerFragment);
        document.body.appendChild(timePickersContainer);
    }
    // executes value updates for all time pickers in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                timePickersList[i].value = new Date(2017, 0, 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
            }
        }, 10);
    }
    
        appendTimePickers();
        runTest();
    

	}	
}