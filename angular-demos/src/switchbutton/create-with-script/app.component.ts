import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SwitchButtonComponent, Smart } from 'smart-webcomponents-angular/switchbutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.


		const smartSwitchButton = document.createElement("smart-switch-button");

		document.body.appendChild(smartSwitchButton);

		Smart.Render();
	}
}