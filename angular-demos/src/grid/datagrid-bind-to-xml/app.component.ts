import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, Smart } from 'smart-webcomponents-angular/grid';


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
	
	appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	} 
	
	filtering = {
		enabled: true
	}
	
	sorting = {
		enabled: true
	}
	
	dataSource = new Smart.DataAdapter({
	    dataSource: './assets/customers.xml',
		root: 'entry',
		record: 'content',
		id: 'CustomerID',
		dataFields: [
			{ name: 'CompanyName', dataType: 'string' },
			{ name: 'ContactName', dataType: 'string' },
			{ name: 'ContactTitle', dataType: 'string' },
			{ name: 'City', dataType: 'string' },
			{ name: 'PostalCode',dataType: 'string' },
			{ name: 'Country', dataType: 'string' }
		]
	})

	columns: GridColumn[] = [
		{ label: 'Company Name', dataField: 'CompanyName', width: 250 },
		{ label: 'Contact Name', dataField: 'ContactName', width: 150 },
		{ label: 'Contact Title', dataField: 'ContactTitle', width: 180 },
		{ label: 'City', dataField: 'City', width: 120 },
		{ label: 'Postal Code', dataField: 'PostalCode', width: 90 },
		{ label: 'Country', dataField: 'Country' }
	]
}