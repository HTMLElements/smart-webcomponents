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
	    
    let dateTimePickersList = [];
    // appends 100 date time inputs on the page
    function appendDateTimePickers() {
        const dateTimePickersContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newDateTimePicker = document.createElement('smart-date-time-picker');
            newDateTimePicker.calendarButton = true;
            newDateTimePicker.calendarMode = 'classic';
            newDateTimePicker.dropDownDisplayMode = 'classic';
            newDateTimePicker.dropDownPosition = 'center-bottom';
            dateTimePickersList.push(newDateTimePicker);
            containerFragment.appendChild(newDateTimePicker);
        }
        dateTimePickersContainer.appendChild(containerFragment);
        document.body.appendChild(dateTimePickersContainer);
    }
    // executes value updates for all date time inputs in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                const year = Math.floor(Math.random() * 20 + 2000), month = Math.floor(Math.random() * 11 + 12), day = Math.floor(Math.random() * 28 + 1);
                dateTimePickersList[i].value = new Smart.Utilities.DateTime(year, month, day);
            }
        }, 10);
    }
    
        appendDateTimePickers();
        runTest();
    

	}	
}