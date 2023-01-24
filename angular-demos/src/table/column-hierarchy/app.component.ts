import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn, TableColumnGroup } from 'smart-webcomponents-angular/table';
import { GetData } from './../../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	columnReorder: boolean = true;

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	freezeHeader: boolean = true;

	columns: TableColumn[] = [
		{ label: 'id', dataField: 'id', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'First Name', dataField: 'firstName', dataType: 'string', columnGroup: 'userInfo' },
		{ label: 'Last Name', dataField: 'lastName', dataType: 'string', columnGroup: 'userInfo' },
		{ label: 'Product Name', dataField: 'productName', dataType: 'string', columnGroup: 'purchaseInfo' },
		{ label: 'Quantity', dataField: 'quantity', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'Price', dataField: 'price', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'Total', dataField: 'total', dataType: 'number', columnGroup: 'productInfo' }
	];

	columnGroups: TableColumnGroup[] = [
		{ label: 'User Info', name: 'userInfo' },
		{ label: 'Product Info', name: 'productInfo', parentGroup: 'purchaseInfo' },
		{ label: 'Purchase Info', name: 'purchaseInfo' }
	]

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