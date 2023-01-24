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
	    
    let newLEDsList = [];
    // appends 100 LEDs  on the page
    function appendLEDs() {
        const LEDsContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newLED = document.createElement('smart-led');
            newLED.classList.add('testLED');
            newLEDsList.push(newLED);
            containerFragment.appendChild(newLED);
        }
        LEDsContainer.appendChild(containerFragment);
        document.body.appendChild(LEDsContainer);
    }
    // executes value updates for all LEDs in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                newLEDsList[i].checked = Boolean(Math.round(Math.random() * 2));
            }
        }, 10);
    }
    
        appendLEDs();
        runTest();
    

	}	
}