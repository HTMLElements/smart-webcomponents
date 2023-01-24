import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) array!: ArrayComponent;
	@ViewChild('array2', { read: ArrayComponent, static: false }) array2!: ArrayComponent;
	@ViewChild('array3', { read: ArrayComponent, static: false }) array3!: ArrayComponent;
	@ViewChild('array4', { read: ArrayComponent, static: false }) array4!: ArrayComponent;
	
 
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