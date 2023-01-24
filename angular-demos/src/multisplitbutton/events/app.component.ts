import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MultiSplitButtonComponent } from 'smart-webcomponents-angular/multisplitbutton';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('multisplitbutton', { read: MultiSplitButtonComponent, static: false }) multisplitbutton: MultiSplitButtonComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

	buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];
	dropDownButtonPosition = 'right';

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

		that.multisplitbutton.addEventListener('buttonClick', function (event: CustomEvent) {
			that.log.nativeElement.innerHTML = "Clicked Button " + event.detail.index;
		});
	}
}