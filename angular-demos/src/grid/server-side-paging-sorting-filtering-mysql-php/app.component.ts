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
		// afterViewInit code.
    }
		
    appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	sorting = {
		enabled: true
	}
	
	filtering = {
		enabled: true
	}
	
	pager = {
		visible: true
	}
	
	paging = {
		enabled: true
	}
	
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			const sqlQuery = details.query;
			window.query.innerHTML = 'SELECT CompanyName, ContactName, ContactTitle, Country, Address, City FROM Customers' + sqlQuery['where'] + sqlQuery['groupBy'] + sqlQuery['orderBy'] + sqlQuery['limit'];
			new window.Smart.Ajax({
				url: 'grid_data.php',
				dataSourceType: 'json',
				data: details.query
			}, (response) => {
				resultCallbackFunction({
					dataSource: JSON.parse(response.data),
					virtualDataSourceLength: parseInt(response.length)
				});
			});
		},
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