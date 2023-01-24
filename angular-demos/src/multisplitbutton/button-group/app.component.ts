import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultiSplitButtonComponent } from 'smart-webcomponents-angular/multisplitbutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('multisplitbutton', { read: MultiSplitButtonComponent, static: false }) multisplitbutton: MultiSplitButtonComponent;

	buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];

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