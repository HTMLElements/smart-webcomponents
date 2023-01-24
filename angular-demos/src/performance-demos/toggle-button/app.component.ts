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
	    
    let toggleButtonsList = [];
    // appends 100 toggle buttons on the page
    function appendToggleButtons() {
        const toggleButtonsContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newToggleButton = document.createElement('smart-toggle-button');
            newToggleButton.classList.add('testToggleButton');
            toggleButtonsList.push(newToggleButton);
            containerFragment.appendChild(newToggleButton);
        }
        toggleButtonsContainer.appendChild(containerFragment);
        document.body.appendChild(toggleButtonsContainer);
    }
    // executes value updates for all toggle buttons in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                toggleButtonsList[i].checked = Boolean(Math.round(Math.random() * 2));
            }
        }, 10);
    }
    
        appendToggleButtons();
        runTest();
    

	}	
}