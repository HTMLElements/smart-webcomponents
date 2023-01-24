import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SplitterComponent, SplitterResizeMode } from 'smart-webcomponents-angular/splitter';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
	@ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;


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
			radioButtons = [that.radiobutton, that.radiobutton2, that.radiobutton3, that.radiobutton4];

		for (let i = 0; i < radioButtons.length; i++) {
			radioButtons[i].addEventListener('change', function (event: CustomEvent): void {
				const el: HTMLElement = event.target as HTMLElement;

				that.splitter.resizeMode = el.textContent.trim() as SplitterResizeMode;
			});
		}
	}
}