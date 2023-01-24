import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, Smart } from 'smart-webcomponents-angular/grid';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GetData } from '../../common/data';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('addRecord', { read: ButtonComponent, static: false }) addRecord!: ButtonComponent;
	@ViewChild('removeRecord', { read: ButtonComponent, static: false }) removeRecord!: ButtonComponent;

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(100),
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

	columns = [
		{
			label: 'First Name', width: 150, dataField: 'firstName'
		},
		{ label: 'Last Name', width: 150, dataField: 'lastName' },
		{ label: 'Product', width: 200, dataField: 'productName' },
		{ label: 'Quantity', width: 100, dataField: 'quantity' },
		{ label: 'Unit Price', width: 100, dataField: 'price', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', width: 200, cellsFormat: 'c2' }
	];

	addRecordOnClick(): void {
		this.grid.dataSource.insert(0, { firstName: 'Stephen', lastName: 'Sanderson', productName: 'Diamonds', quantity: 6, price: 10000, total: 60000 });
	}

	removeRecordOnClick(): void {
		this.grid.dataSource.removeAt(0);
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