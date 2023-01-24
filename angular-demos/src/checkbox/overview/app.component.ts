import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
	@ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
	@ViewChild('checkbox4', { read: CheckBoxComponent, static: false }) checkbox4!: CheckBoxComponent;
	@ViewChild('checkbox5', { read: CheckBoxComponent, static: false }) checkbox5!: CheckBoxComponent;
	@ViewChild('checkbox6', { read: CheckBoxComponent, static: false }) checkbox6!: CheckBoxComponent;
	@ViewChild('checkbox7', { read: CheckBoxComponent, static: false }) checkbox7!: CheckBoxComponent;
	@ViewChild('checkbox8', { read: CheckBoxComponent, static: false }) checkbox8!: CheckBoxComponent;
	@ViewChild('checkbox9', { read: CheckBoxComponent, static: false }) checkbox9!: CheckBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here.

	}	
}