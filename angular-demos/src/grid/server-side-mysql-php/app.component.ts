import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';

declare global {
   interface Window {
	   demoServer: any;
	   query: HTMLElement;
	   data: any;
	   alasql: any;
   }
}

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
    }

    appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	sorting = {
		enabled: true
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
	
	grouping = {
		enabled: true,
		renderMode: 'basic'
	}
	
	dataSource = new window.Smart.DataAdapter({
		dataSource: './grid_data.php',
		dataSourceType: 'json',
		dataFields: [
			'CompanyName: string',
			'ContactName: string',
			'ContactTitle: string',
			'Address: string',
			'City: string',
			'Country: string'
		]
	})
	
	columns = [
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]
}