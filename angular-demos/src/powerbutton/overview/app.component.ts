import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PowerButtonComponent } from 'smart-webcomponents-angular/powerbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('powerbutton', { read: PowerButtonComponent, static: false }) powerbutton!: PowerButtonComponent;
	@ViewChild('powerbutton2', { read: PowerButtonComponent, static: false }) powerbutton2!: PowerButtonComponent;
	@ViewChild('powerbutton3', { read: PowerButtonComponent, static: false }) powerbutton3!: PowerButtonComponent;
	@ViewChild('powerbutton4', { read: PowerButtonComponent, static: false }) powerbutton4!: PowerButtonComponent;
	@ViewChild('powerbutton5', { read: PowerButtonComponent, static: false }) powerbutton5!: PowerButtonComponent;
	@ViewChild('powerbutton6', { read: PowerButtonComponent, static: false }) powerbutton6!: PowerButtonComponent;
	@ViewChild('powerbutton7', { read: PowerButtonComponent, static: false }) powerbutton7!: PowerButtonComponent;
	@ViewChild('powerbutton8', { read: PowerButtonComponent, static: false }) powerbutton8!: PowerButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        document.getElementById('powerButtonAnimation').addEventListener('change', function (event) {
            document.getElementById('progressBarAnimated').indeterminate = event.detail.value ? false : true;
        });
    

	}	
}