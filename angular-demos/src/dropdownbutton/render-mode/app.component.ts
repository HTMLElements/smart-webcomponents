import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
	@ViewChild('dropdownbutton2', { read: DropDownButtonComponent, static: false }) dropdownbutton2!: DropDownButtonComponent;
	
 
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