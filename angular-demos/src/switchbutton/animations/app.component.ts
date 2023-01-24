import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
	@ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2!: SwitchButtonComponent;
	@ViewChild('switchbutton3', { read: SwitchButtonComponent, static: false }) switchbutton3!: SwitchButtonComponent;
	@ViewChild('switchbutton4', { read: SwitchButtonComponent, static: false }) switchbutton4!: SwitchButtonComponent;
	@ViewChild('switchbutton5', { read: SwitchButtonComponent, static: false }) switchbutton5!: SwitchButtonComponent;
	@ViewChild('switchbutton6', { read: SwitchButtonComponent, static: false }) switchbutton6!: SwitchButtonComponent;
	
 
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