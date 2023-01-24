import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
	paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 0
	}
	pager = {
		visible: true
	}
	dataSource = new Smart.DataAdapter(
		{
			dataSource: GetData(500),
			dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'productName: string',
					'quantity: number',
					'price: number',
					'total: number'
				]
		})

	columns = [
		'id',
		{
			label: 'First Name', dataField: 'firstName'
		},
		{ label: 'Last Name', dataField: 'lastName' },
		{ label: 'Product', dataField: 'productName' },
		{ label: 'Quantity', dataField: 'quantity' },
		{ label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
	]


	ngOnInit(): void {

	}
	ngAfterViewInit(): void {
	}
}
