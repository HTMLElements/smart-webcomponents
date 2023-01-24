import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
	@ViewChild('listbox2', { read: ListBoxComponent, static: false }) listbox2!: ListBoxComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
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