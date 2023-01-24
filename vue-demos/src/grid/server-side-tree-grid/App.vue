<template>
	<div class="vue-root">
		<div class="demo-description">
			<h1>Server-side Tree Grid</h1>
			Datagrid in this example is used as a Tree Grid. That is achieved by setting the dataSource's 'keyDataField' and 'parentDataField' properties. When a row is expanded the datagrid sends a request with the expanded row data object on the Server-Side Datasource.
			The server uses the SQL query sent by the Server-Side Datasource and returns the requested sub-rows collection. This example uses a demo server with AlaSQL that generates SQL to show how a real server might use the requests sent by the Datagrid. The
			Server-Side Datagrid usage does not have any restrictions on the server-side technologies used.
		</div>
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
						filtering: {
							enabled: true
						},
						sorting: {
							enabled: true
						},
						appearance: {
							alternationStart: 0,
							alternationCount: 2
						},
						dataSource: new window.Smart.DataAdapter({
							virtualDataSourceOnExpand: function(resultCallbackFunction, details) {
								const result = window.demoServer.getData(details);
								// when you set the 'leaf' property to true, the row's toggle button is not displayed.
								for (let i = 0; i < result.data.length; i++) {
									if (result.data[i].EmployeeID !== 5) {
										result.data[i].leaf = true;
									}
								}
								resultCallbackFunction({
									dataSource: result.data,
									virtualDataSourceLength: result.length
								});
							},
							virtualDataSource: function(resultCallbackFunction, details) {
								if (details.action === 'dataBind') {
									window.demoServer = DemoServer();
									const result = window.demoServer.getData(details);
									window.data = window.demoServer.executeQuery('SELECT * FROM Employees');
									resultCallbackFunction({
										dataSource: result.data,
										virtualDataSourceLength: result.length
									});
								} else {
									const that = this;
									let data = window.data;
									window.query.innerHTML = '';
									// Sorts the data.
									if (details.sorting.length > 0 && (details.action === 'sort' || details.action === 'dataBind')) {
										let sortColumns = [];
										let sortOrders = [];
										for (let dataField in details.sorting) {
											const sortOrder = details.sorting[dataField].sortOrder;
											sortColumns.push(dataField);
											sortOrders.push(sortOrder);
										}
										that.sortedData = window.Smart.DataAdapter.Sort(data, sortColumns, sortOrders);
									} else if (details.sorting.length === 0) {
										that.sortedData = null;
									}
									if (that.sortedData) {
										data = that.sortedData;
									}
									// Filters the data.
									if (details.filtering.length > 0 && (details.action === 'sort' || details.action === 'filter' || details.action === 'dataBind')) {
										let filterColumns = [];
										let filters = [];
										for (let dataField in details.filtering) {
											const filter = details.filtering[dataField];
											filterColumns.push(dataField);
											filters.push(filter);
										}
										that.filteredData = window.Smart.DataAdapter.Filter(data, filterColumns, filters);
									} else if (details.filtering.length === 0) {
										that.filteredData = null;
									}
									if (that.filteredData) {
										data = that.filteredData;
									}
									// when you set the 'leaf' property to true, the row's toggle button is not displayed.
									for (let i = 0; i < data.length; i++) {
										if (data[i].EmployeeID !== 5 && data[i].EmployeeID !== 2) {
											data[i].leaf = true;
										}
									}
									resultCallbackFunction({
										dataSource: data,
										virtualDataSourceLength: data.length
									});
								}
							},
							keyDataField: 'EmployeeID',
							parentDataField: 'ReportsTo',
							id: 'EmployeeID',
							dataFields: [
								'EmployeeID: number',
								'ReportsTo: number',
								'FirstName: string',
								'LastName: string',
								'BirthDate: date',
								'Notes: string'
							]
						}),
						columns: [{
								label: 'First Name',
								dataField: 'FirstName',
								width: 200
							},
							{
								label: 'Last Name',
								dataField: 'LastName',
								width: 200
							},
							{
								label: 'Birth Date',
								dataField: 'BirthDate',
								cellsFormat: 'd',
								width: 120
							},
							{
								label: 'Notes',
								dataField: 'Notes'
							}
						]
					};
				}
			});


		})
	}
};
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
export function DemoServer() {
	window.alasql.options.cache = false;
	createTable();
	const data = [];
	return {
		executeQuery: executeQuery,
		getData: function(request) {
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				length: queryResult.length
			};
		},
	};

	function createTable() {
		executeQuery('CREATE TABLE Employees (EmployeeID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,LastName NVARCHAR(255),FirstName NVARCHAR(255),BirthDate DATE,Photo NVARCHAR(255),Notes MEMO, ReportsTo NVARCHAR(255))');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Davolio","Nancy","1968-12-08","EmpID1.pic","Education includes a BA in psychology from Colorado State University. She also completed (The Art of the Cold Call). Nancy is a member of \'Toastmasters International\'.", 2)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Fuller","Andrew","1952-02-19","EmpID2.pic","Andrew received his BTS commercial and a Ph.D. in international marketing from the University of Dallas. He is fluent in French and Italian and reads German. He joined the company as a sales representative, was promoted to sales manager and was then named vice president of sales. Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.", null)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Leverling","Janet","1963-08-30","EmpID3.pic","Janet has a BS degree in chemistry from Boston College). She has also completed a certificate program in food retailing management. Janet was hired as a sales associate and was promoted to sales representative.", 2)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Peacock","Margaret","1958-09-19","EmpID4.pic","Margaret holds a BA in English literature from Concordia College and an MA from the American Institute of Culinary Arts. She was temporarily assigned to the London office before returning to her permanent post in Seattle.", 2)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Buchanan","Steven","1955-03-04","EmpID5.pic","Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree. Upon joining the company as a sales representative, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London, where he was promoted to sales manager. Mr. Buchanan has completed the courses \'Successful Telemarketing\' and \'International Sales Management\'. He is fluent in French.", 2)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Suyama","Michael","1963-07-02","EmpID6.pic","Michael is a graduate of Sussex University (MA, economics) and the University of California at Los Angeles (MBA, marketing). He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional\'. He is fluent in Japanese and can read and write French, Portuguese, and Spanish.", 5)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("King","Robert","1960-05-29","EmpID7.pic","Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan and then joining the company. After completing a course entitled \'Selling in Europe\', he was transferred to the London office.", 5)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Callahan","Laura","1958-01-09","EmpID8.pic","Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.", 2)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Dodsworth","Anne","1969-07-02","EmpID9.pic","Anne has a BA degree in English from St. Lawrence College. She is fluent in French and German.", 5)');
		executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("West","Adam","1928-09-19","EmpID10.pic","An old chum.", 2)');
	}

	function executeQuery(query) {
		return window.alasql(query);
	}

	function executeSql(request) {
		const sql = 'SELECT * FROM Employees' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];;
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Employees ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		window.query.innerHTML = sql;
		return {
			data: result,
			length: length
		};
	}
}
</script>

<style>
smart-grid {
	height: auto;
}
</style>
