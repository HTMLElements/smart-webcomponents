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
	    
    let colorPickers = [];
    // appends 100 elements  on the page
    function appendDropDownButtons() {
        for (let i = 0; i < 100; i++) {
            const colorPicker = document.createElement('smart-color-picker');
            colorPickers.push(colorPicker);
            document.body.appendChild(colorPicker);
        }
    }
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                //colorPickers[i].open();
                //colorPickers[i].close();
                //colorPickers[i].placeholder = (1 + Math.round(Math.random() * 10)).toString();
            }
        }, 1);
    }
    
        console.time('performance');
        appendDropDownButtons();
        console.timeEnd('performance');
        runTest();
    

	}	
}