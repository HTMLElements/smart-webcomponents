import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
	
 
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