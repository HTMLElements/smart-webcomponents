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
	
	sorting = {
		enabled: true
	}
	
	filtering = {
		enabled: true
	}
	
	paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 0
	}
	
	pager = {
		position: 'far',
		visible: true
	}
	
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			const that = this;
			if (details.action === 'dataBind') {
				fetch('https://raw.githubusercontent.com/HTMLElements/smart-webcomponents/master/sampledata/customers.json').then(response => response.json())
					.then(data => {
					window.demoServer = DemoServer(data);
					const result = window.demoServer.getData(details);
					resultCallbackFunction({
						dataSource: result.data,
						virtualDataSourceLength: result.length
					});
				});
			}
			else {
				const result = window.demoServer.getData(details);
				resultCallbackFunction({
					dataSource: result.data,
					virtualDataSourceLength: result.length
				});
			}
		},
		id: 'CustomerID',
		dataFields: [
			'CustomerID: string',
			'CompanyName: string',
			'ContactName: string',
			'ContactTitle: string',
			'Address: string',
			'City: string',
			'Country: string'
		]
	})
	
	columns = [
		{
			label: 'Id', dataField: 'CustomerID'
		},
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]
}

// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
export function DemoServer(allData) {
	window.alasql.options.cache = false;
	return {
		getData: function (request) {
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				length: queryResult.length
			};
		},
	};
	function executeSql(request) {
		const sql = 'SELECT * FROM ?' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from ? ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from ? ' + request.query['where'];
		const result = window.alasql(sql, [allData]);
		const length = window.alasql(sqlCount, [allData])[0].length;
		window.query.innerHTML = sql;
		return { data: result, length: length };
	}
}