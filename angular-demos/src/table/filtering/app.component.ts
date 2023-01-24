import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetData } from './../../common/data';
import { Utilities } from 'smart-webcomponents-angular/source/modules/smart.element';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
	
	dataSource = GetData(50);

	dataSourceSettings = {
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	};

	filtering: Boolean = true;

	tooltip: Boolean = true;

	columns: TableColumn[] = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
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
		label: 'Total',
		dataField: 'total',
		dataType: 'number'
	}
	];

	ngAfterViewInit(): void {
		// afterViewInit code.
		const filterGroup = new Utilities.FilterGroup();
        const filterObject = filterGroup.createFilter('numericFilter', 3, 'GREATER_THAN');
		
        filterGroup.addFilter('and', filterObject);
        this.table.addFilter('quantity', filterGroup);		
	}
}