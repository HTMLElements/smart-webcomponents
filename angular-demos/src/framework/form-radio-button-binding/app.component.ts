import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { App } from 'smart-webcomponents-angular/source/smart.core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

	app = new App({
		data: {
			picked: 'One'
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