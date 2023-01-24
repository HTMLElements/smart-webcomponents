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
	    
    let tabsList = [];
    // appends 100 tabs on the page
    function appendTabs() {
        const tabsContainer = document.createElement('div');
        const containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newTabs = document.createElement('smart-tabs');
            newTabs.classList.add('performanceDemoTabs');
            newTabs.innerHTML = '<smart-tab-item label="TAB 1">Content 1</smart-tab-item><smart-tab-item label="TAB 2" selected>Content 2</smart-tab-item><smart-tab-item label="TAB 3">Content 3</smart-tab-item><smart-tab-item label="TAB 4">Content 4</smart-tab-item>';
            tabsList.push(newTabs);
            containerFragment.appendChild(newTabs);
        }
        tabsContainer.appendChild(containerFragment);
        document.body.appendChild(tabsContainer);
    }
    // executes value updates for all tabs in a 10ms loop
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                tabsList[i].select(Math.floor(Math.random() * 4));
            }
        }, 10);
    }
    
        appendTabs();
        runTest();
    

	}	
}