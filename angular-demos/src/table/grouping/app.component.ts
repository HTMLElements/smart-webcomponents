import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetData } from './../../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});

	grouping: Boolean = true;

	keyboardNavigation: Boolean = true;

	columns: TableColumn[] = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	}
	];

	handleHideGroupNameChange(event: CustomEvent) {
		const table = this.table.nativeElement;

		if (event.detail.value) {
			table.style.setProperty('--smart-table-group-name-display', 'none');
		}
		else {
			table.style.setProperty('--smart-table-group-name-display', null);
		}
	}

	handleHideGroupCountChange(event: CustomEvent) {
		const table = this.table.nativeElement;

		if (event.detail.value) {
			table.style.setProperty('--smart-table-group-count-display', 'none');
		}
		else {
			table.style.setProperty('--smart-table-group-count-display', null);
		}
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

		const table = this.table;

		table.addGroup('productName');
		table.addGroup('quantity');
	}
}