import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent, CircularProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
	@ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2: ProgressBarComponent;
	@ViewChild('circularProgressBar', { read: CircularProgressBarComponent, static: false }) circularProgressBar: CircularProgressBarComponent;


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
			progressBars = [that.progressbar, that.progressbar2, that.circularProgressBar];

		for (let i = 0; i < progressBars.length; i++) {
			progressBars[i].formatFunction = (value: number): string => value + '%';
		}
	}
}