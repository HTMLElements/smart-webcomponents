import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;


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
			dropDownList = that.dropdownlist,
			smartWindow = that.smartWindow;

		that.button.addEventListener('click', function (): void {
			smartWindow.opened ? smartWindow.close() : smartWindow.open();
		});

		dropDownList.addEventListener('change', function (): void {
			smartWindow.headerButtons = dropDownList.selectedValues;
		});
	}
}