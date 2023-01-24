import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
	@ViewChild('tabs3', { read: TabsComponent, static: false }) tabs3!: TabsComponent;
	@ViewChild('tabs4', { read: TabsComponent, static: false }) tabs4: TabsComponent;


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

		that.button.addEventListener('click', function () {
			that.tabs.select(0);
		});
	}
}