import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
    }
	
	ngOnInit(): void {
		// onInit code.
		this.init();
	}
	
	init(): void {
		// init code.
	    

	}	
}