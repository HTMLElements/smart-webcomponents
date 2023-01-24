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
	    
    let newPowerButtonsList = [];
    // appends 100 power buttons  on the page
    function appendPowerButtons() {
        const powerButtonsContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newPowerButton = document.createElement('smart-power-button');
            newPowerButton.classList.add('testPowerButton');
            newPowerButtonsList.push(newPowerButton);
            containerFragment.appendChild(newPowerButton);
        }
        powerButtonsContainer.appendChild(containerFragment);
        document.body.appendChild(powerButtonsContainer);
    }
    // executes value updates for all power buttons in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                newPowerButtonsList[i].checked = Boolean(Math.round(Math.random() * 2));
            }
        }, 10);
    }
    
        appendPowerButtons();
        runTest();
    

	}	
}