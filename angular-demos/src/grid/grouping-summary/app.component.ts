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
		groupBy: ['productName'],
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

	onAfterInit = () => {
		const rows = this.grid.getVisibleRows().then((result) => {
			result[0].expand();
		});
	}

	sorting = {
		enabled: true
	}

	behavior = {
		allowColumnReorder: true
	}

	grouping = {
		enabled: true,
		renderMode: 'compact',
		groupBar: {
			visible: true
		},
		summaryRow: {
			inline: false
		}
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
		{ label: 'Quantity', dataField: 'quantity', summary: ['min', 'max'], align: 'right', cellsAlign: 'right', },
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{
			label: 'Total', dataField: 'total', align: 'right', summary: ['sum'], cellsAlign: 'right', cellsFormat: 'c2'
		}
	]
}