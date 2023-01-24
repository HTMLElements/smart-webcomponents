import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SortableComponent } from 'smart-webcomponents-angular/sortable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('sortable', { read: SortableComponent, static: false }) sortable!: SortableComponent;
	
 
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