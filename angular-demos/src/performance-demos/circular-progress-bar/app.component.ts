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
	    
    let progressBarList = [];
    // appends 100 progress bars on the page
    function appendSliders() {
        const progressBarsContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newProgressBar = document.createElement('smart-circular-progress-bar');
            newProgressBar.setAttribute('max', 1000);
            newProgressBar.classList.add('testProgressBar');
            progressBarList.push(newProgressBar);
            containerFragment.appendChild(newProgressBar);
        }
        progressBarsContainer.appendChild(containerFragment);
        document.body.appendChild(progressBarsContainer);
    }
    // executes value updates for all progress bars in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                progressBarList[i].value = Math.random() * 999 + 1;
            }
        }, 10);
    }
    
        appendSliders();
        runTest();
    

	}	
}