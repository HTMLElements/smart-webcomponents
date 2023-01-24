import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PathComponent } from 'smart-webcomponents-angular/path';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('path', { read: PathComponent, static: false }) path!: PathComponent;
	@ViewChild('path2', { read: PathComponent, static: false }) path2!: PathComponent;
	
 
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