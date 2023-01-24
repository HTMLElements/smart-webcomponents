import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
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
		const that = this;

		that.log.nativeElement.textContent = "Change event. Status: " + false;

		that.checkbox.addEventListener('change', function (event: CustomEvent) {
			const checkStatus = event.detail.value;
			that.log.nativeElement.textContent = "Change event. Status: " + checkStatus;
		});
	}
}