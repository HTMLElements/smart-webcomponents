import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
	@ViewChild('tabs3', { read: TabsComponent, static: false }) tabs3!: TabsComponent;


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