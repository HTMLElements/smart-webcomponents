import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import 'smart-webcomponents-angular/source/smart.element';
import { App } from 'smart-webcomponents-angular/source/smart.core';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	app = new App({
		data: {
			selected: ['A']
		}
	});



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