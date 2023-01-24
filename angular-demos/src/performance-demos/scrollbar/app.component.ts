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
	    
    let scrollBarsList = [];
    // appends 100 scroll bars on the page
    function appendScrollBars() {
        const scrollBarsContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newScrollBar = document.createElement('smart-scroll-bar');
            newScrollBar.classList.add('testScrollBar');
            scrollBarsList.push(newScrollBar);
            containerFragment.appendChild(newScrollBar);
        }
        scrollBarsContainer.appendChild(containerFragment);
        document.body.appendChild(scrollBarsContainer);
    }
    // executes value updates for all scroll bars in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                scrollBarsList[i].value = Math.random() * 999 + 1;
            }
        }, 10);
    }
    
        appendScrollBars();
        runTest();
    

	}	
}