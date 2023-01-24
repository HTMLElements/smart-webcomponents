import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
	@ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2: ProgressBarComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    

	}	
}