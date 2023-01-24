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
	    
    
        const button = document.createElement("smart-button");
        button.id = "button";
        button.innerHTML = "Click Me";
        document.body.appendChild(button);
        button.addEventListener("click", function () {
            button.innerHTML = "Clicked";
        });
    

	}	
}