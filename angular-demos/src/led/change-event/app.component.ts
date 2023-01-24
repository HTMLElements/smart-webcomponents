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
	    
    
        const LED = document.querySelector("smart-led"), log = document.querySelector("#log");
        log.textContent = false;
        LED.addEventListener('change', function (event) {
            const checkStatus = event.detail.value;
            log.textContent = checkStatus;
        });
    

	}	
}