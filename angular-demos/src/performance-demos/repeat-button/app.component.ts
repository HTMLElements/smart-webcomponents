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
	    
    
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const button = document.createElement("smart-repeat-button");
            button.classList.add('testRepeatButton');
            button.innerHTML = "Click Me";
            fragment.appendChild(button);
        }
        document.body.appendChild(fragment);
    

	}	
}