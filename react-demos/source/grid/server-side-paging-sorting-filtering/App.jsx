import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
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

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Server-Side Pagination, Sort, Filter</h1>Data in this demo is loaded on demand when you change Page, Sort, Filter
			        or expand a Group. This is achieved by using the Grid's Data Virtualization
			        in combination with DataAdapter's "virtualDataSource".
			       <ul>
						<li>Paging is enabled by setting the 'pager' and  'paging' properties.</li>
						<li>Filtering is enabled by setting the 'filtering' property.</li>
						<li>Sorting is enabled by setting the 'sorting' property.</li>
						<li>The number of rows returned per request is set to 10, which is equal to
							the pageSize.</li>
						<li>The 'first' and 'last' properties in the data request are used by the
							server to perform paging.</li>
						<li>The 'query' in the data request is used by the server to perform sorting
							and filtering.</li>
					</ul>
			    </div>
			    <Grid paging={this.paging} pager={this.pager} filtering={this.filtering} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} ref="grid" id="grid"></Grid>
			    <br />
			    <br />
			    	<h3>SQL Query</h3>
			    <div id="query"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

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
export default App;
