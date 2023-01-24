import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from 'smart-webcomponents-angular/accordion';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

	expandMode: 'singleFitHeight';

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	ngOnInit(): void {
		// onInit code.
	}

	onChange($event) {
		this.accordion.expandMode = $event.detail.value;
	}

	onExpand($event) {
		console.log('expand');
	}

	init(): void {
		// init code.
	}
}