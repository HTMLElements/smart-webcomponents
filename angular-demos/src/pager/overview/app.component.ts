import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PagerComponent } from 'smart-webcomponents-angular/pager';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('pager', { read: PagerComponent, static: false }) pager!: PagerComponent;
	@ViewChild('pager2', { read: PagerComponent, static: false }) pager2!: PagerComponent;
	
 
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