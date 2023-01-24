import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {


	ngAfterViewInit(): void {
		// afterViewInit code.
	}

	ngOnInit(): void {
		// onInit code.
		this.init();
	}

	init(): void {
		// init code.


	}
}