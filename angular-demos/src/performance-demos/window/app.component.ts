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
	    
    let windowList = [];
    // appends 100 windows to the page
    function appendWindows() {
        const windowContainer = document.createElement('div');
        for (let i = 0; i < 100; i++) {
            const newWindow = document.createElement('smart-window');
            newWindow.label = 'Window' + i;
            newWindow.innerHTML = 'Random Text Number' + i;
            newWindow.classList.add('testWindow');
            windowList.push(newWindow);
            windowContainer.appendChild(newWindow);
        }
        document.body.appendChild(windowContainer);
    }
    // executes value updates for all windows in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                windowList[i].opened ? windowList[i].close() : windowList[i].open();
            }
        }, 10);
    }
    
        appendWindows();
        runTest();
    

	}	
}