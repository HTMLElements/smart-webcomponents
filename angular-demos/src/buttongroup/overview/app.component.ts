import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonGroupComponent } from 'smart-webcomponents-angular/buttongroup';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('buttongroup', { read: ButtonGroupComponent, static: false }) buttongroup: ButtonGroupComponent;

	dataSource: Array<String> = ["a", "b", "c"];

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		"use strict";

	}
}