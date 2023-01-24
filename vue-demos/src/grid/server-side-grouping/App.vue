<template>
	<div class="vue-root">
		<div class="demo-description">
			<h1>Server-side Grouping</h1>
			Datagrid in this example is with Grouping feature turned-on. That is achieved by setting the dataSource's 'groupBy' property. When a row is expanded the datagrid sends a request with the expanded row data object on the Server-Side Datasource. The server
			uses the SQL query sent by the Server-Side Datasource and returns the requested sub-rows collection. This example uses a demo server with AlaSQL that generates SQL to show how a real server might use the requests sent by the Datagrid. The Server-Side
			Datagrid usage does not have any restrictions on the server-side technologies used.</div>
		<smart-grid id="grid"></smart-grid>
		<br />
		<br />
		<h3>SQL Query</h3>
		<div id="query"></div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {
			window.Smart('#grid', class {
				get properties() {
					return {
						sorting: {
							enabled: true
						},
						filtering: {
							enabled: true
						},
						paging: {
							enabled: true,
							pageSize: 10,
							pageIndex: 0
						},
						grouping: {
							enabled: true,
							renderMode: 'basic'
						},
						pager: {
							position: 'far',
							visible: true
						},
						dataSource: new window.Smart.DataAdapter({
							groupBy: ['Country'],
							virtualDataSourceOnExpand: function(resultCallbackFunction, details) {
								const result = window.demoServer.getData(details);
								resultCallbackFunction({
									dataSource: result.data,
									virtualDataSourceLength: result.length
								});
							},
							virtualDataSource: function(resultCallbackFunction, details) {
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
								} else {
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
						}),
						columns: [{
								label: 'Id',
								dataField: 'CustomerID'
							},
							{
								label: 'Company Name',
								dataField: 'CompanyName'
							},
							{
								label: 'Contact Name',
								dataField: 'ContactName'
							},
							{
								label: 'Contact Title',
								dataField: 'ContactTitle'
							},
							{
								label: 'Address',
								dataField: 'Address'
							},
							{
								label: 'City',
								dataField: 'City'
							},
							{
								label: 'Country',
								dataField: 'Country'
							}
						]
					};
				}
			});
		})
	}
};
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
function DemoServer(allData) {
	window.alasql.options.cache = false;
	return {
		getData: function(request) {
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
		return {
			data: result,
			length: length
		};
	}
}
</script>

<style>

</style>
