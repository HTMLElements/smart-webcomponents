import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(20),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	sorting = {
		enabled: true
	}

	behavior = {
		allowRowReorder: true
	}

	appearance = {
		showRowHeader: true,
		showRowHeaderDragIcon: true
	}

	columns = [
		{
			label: '#', width: 200, dataField: 'id'
		},
		{
			label: 'First Name', dataField: 'firstName'
		},
		{ label: 'Last Name', dataField: 'lastName' },
		{ label: 'Product', dataField: 'productName' },
		{ label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{
			label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2'
		}
	]
}