import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
	@ViewChild('tooltip2', { read: TooltipComponent, static: false }) tooltip2: TooltipComponent;
	@ViewChild('tooltip3', { read: TooltipComponent, static: false }) tooltip3: TooltipComponent;
	@ViewChild('tooltip4', { read: TooltipComponent, static: false }) tooltip4: TooltipComponent;
	
 
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