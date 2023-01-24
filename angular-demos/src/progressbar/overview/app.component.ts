import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
	@ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2!: ProgressBarComponent;
	@ViewChild('progressbar3', { read: ProgressBarComponent, static: false }) progressbar3!: ProgressBarComponent;
	@ViewChild('progressbar4', { read: ProgressBarComponent, static: false }) progressbar4!: ProgressBarComponent;
	@ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	 }	
}