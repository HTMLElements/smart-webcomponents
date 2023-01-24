import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart, GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
		
   appearance: {
		autoShowColumnFilterButton: false
	}
	
	sorting = {
		enabled: true,
		mode: 'one'
	}
	
	filtering = {
		enabled: true,
		filterMenu: {
			mode: 'excel'
		}
	}
	
	dataSource =  new Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number'
		]
   })
   
	columns = [
		{
			label: 'First Name', dataField: 'firstName'
		},
		{ label: 'Last Name', dataField: 'lastName' },
		{ label: 'Product', dataField: 'productName' },
		{ label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
		{ label: 'Delivery Date', dataField: 'date', align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
	]
}