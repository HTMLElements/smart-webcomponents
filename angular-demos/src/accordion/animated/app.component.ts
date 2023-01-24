import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from 'smart-webcomponents-angular/accordion';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
    }
	
	ngOnInit(): void {
		// onInit code.
		this.init();
	}
	
	init(): void {
		// init code.
	    
    var abc;

	}	
}