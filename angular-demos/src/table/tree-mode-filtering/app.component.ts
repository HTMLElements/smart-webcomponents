import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetOrdersData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
	@ViewChild('table2', { read: TableComponent, static: false }) table2: TableComponent;
    
    dataSource = new window.Smart.DataAdapter({
		dataSource: GetOrdersData(50),
		id: 'id',
		keyDataField: 'id',
		parentDataField: 'parentid',
		dataFields: [
			'id: string',
			'name: string',
			'customer: string',
			'price: number',
			'date: date'
		]
	});

	filtering: Boolean = true;

	keyboardNavigation: Boolean = true;

	columns: TableColumn[] = [{
			label: 'Order Name',
			dataField: "name"
		},
		{
			label: 'Customer',
			dataField: "customer"
		},
		{
			label: 'Price',
			dataField: "price",
			dataType: 'number',
			formatFunction(settings: any) {
				settings.template = '$' + settings.value.toFixed(2);
			}
		},
		{
			label: 'Order Date',
			dataField: "date",
			dataType: 'date'
		}
	];
 
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