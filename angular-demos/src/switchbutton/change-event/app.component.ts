import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

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
			smartSwitchButton = that.switchButton,
			log = that.log.nativeElement;

		log.textContent = "false";

		smartSwitchButton.addEventListener('change', function (event: CustomEvent): void {
			const checkStatus = event.detail.value;

			log.textContent = checkStatus;
		});
	}
}