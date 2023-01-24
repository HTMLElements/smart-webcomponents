import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		const that = this,
			buttons = [that.radiobutton, that.radiobutton2];

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('change', function (event: CustomEvent) {
				const checkStatus = event.detail.value;
				that.log.nativeElement.textContent = (<RadioButton>event.target).innerHTML + " is checked";
			});
		}
	}
}