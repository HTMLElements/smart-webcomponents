import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { Hero } from './hero';

@Component({
	selector: 'app-root',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('power', { read: DropDownListComponent, static: false }) power!: DropDownListComponent;

	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

	submitted = false;

	onSubmit() { this.submitted = true; }

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

	newHero() {
		this.model = new Hero(42, '', '');
	}

	get diagnostic() { return JSON.stringify(this.model); }
}