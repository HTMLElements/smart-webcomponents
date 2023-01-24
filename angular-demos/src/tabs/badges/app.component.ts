import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
	@ViewChild('listbox2', { read: ListBoxComponent, static: false }) listbox2: ListBoxComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;


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