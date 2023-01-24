import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {

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