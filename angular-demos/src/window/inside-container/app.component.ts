import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;

	onButtonClick(event: any): void {
		const smartWindow = this.smartWindow;

		smartWindow.opened ? smartWindow.close() : smartWindow.open();
	}

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