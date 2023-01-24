import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox/public_api';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
	@ViewChild('tree2', { read: TreeComponent, static: false }) tree2!: TreeComponent;
	@ViewChild('tree3', { read: TreeComponent, static: false }) tree3!: TreeComponent;


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

	customSortingFunction(items, parentItem) {
		if (parentItem.label === 'Numbers') {
			items.sort(function (a, b) {
				return parseFloat(a.label) - parseFloat(b.label);
			});
		}
		else if (parentItem.label === 'Letters') {
			items.sort(function (a, b) {
				return parseFloat(b.value) - parseFloat(a.value);
			});
		}
		else {
			// apply default sorting
			items.sort(function (a, b) {
				return (a.label).localeCompare(b.label);
			});
		}
	}
}