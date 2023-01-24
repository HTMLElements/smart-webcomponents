import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
	@ViewChild('tabs3', { read: TabsComponent, static: false }) tabs3!: TabsComponent;
	@ViewChild('tabs4', { read: TabsComponent, static: false }) tabs4!: TabsComponent;
	@ViewChild('tabs5', { read: TabsComponent, static: false }) tabs5!: TabsComponent;


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

		that.radiobutton.addEventListener('change', function () {
			that.tabs.select(0);
		});
		that.radiobutton2.addEventListener('change', function () {
			that.tabs.select(1);
		});
		that.radiobutton3.addEventListener('change', function () {
			that.tabs.select(2);
		});
	}
}