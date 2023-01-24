import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
	@ViewChild('datetimepicker2', { read: DateTimePickerComponent, static: false }) datetimepicker2!: DateTimePickerComponent;
	@ViewChild('datetimepicker3', { read: DateTimePickerComponent, static: false }) datetimepicker3!: DateTimePickerComponent;
	
 
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