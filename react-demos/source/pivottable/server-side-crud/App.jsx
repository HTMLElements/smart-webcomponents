import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { PivotTable } from 'smart-webcomponents-react/pivottable';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
		this.pivottable = React.createRef();
	}

	freezeHeader = true;
	grandTotal = true;
	keyboardNavigation = true;
	rowTotals = true;
	pivotTableColumns = [{
		label: 'Age',
		dataField: 'Age',
		summary: 'avg',
		dataType: 'number'
	},
	{
		label: 'Sex',
		dataField: 'Sex',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Country',
		dataField: 'Country',
		allowRowGroup: true,
		rowGroup: true
	}
	];

	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: (resultCallbackFunction, details) => {
			if (details.action === 'dataBind') {
				// inits the demo server.
				window.demoServer = DemoServer();
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
				this.pivottable.current.dataSource = result.data; // syncing PivotTable's data source
			} else {
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
				this.pivottable.current.dataSource = result.data; // syncing PivotTable's data source
			}
		},
		id: 'CustomerID',
		dataFields: [
			'CustomerID: string',
			'CustomerName: string',
			'ContactName: string',
			'Age: number',
			'Sex: string',
			'Address: string',
			'PostalCode: string',
			'City: string',
			'Country: string'
		]
	});
	editing = true;
	editMode = 'row';
	filtering = true;
	filterRow = true;
	pageSize = 25;
	sortMode = 'one';
	columns = [{
		label: 'Id',
		dataField: 'CustomerID',
		width: 40,
		allowEdit: false,
		allowFilter: false
	},
	{
		label: 'Customer Name',
		dataField: 'CustomerName'
	},
	{
		label: 'Contact Name',
		dataField: 'ContactName'
	},
	{
		label: 'Age',
		dataField: 'Age'
	},
	{
		label: 'Sex',
		dataField: 'Sex'
	},
	{
		label: 'Address',
		dataField: 'Address'
	},
	{
		label: 'Postal Code',
		dataField: 'PostalCode'
	},
	{
		label: 'City',
		dataField: 'City'
	},
	{
		label: 'Country',
		dataField: 'Country'
	},
	{
		label: '',
		dataField: '',
		width: 50,
		allowEdit: false,
		allowFilter: false,
		formatFunction(settings) {
			settings.template = `<div className="icon-container"><span className="material-icons delete-icon" row-id="${settings.row}" title="Delete row">delete_forever</span></div>`;
		}
	}
	];

	handleTableClick(event) {
		const deleteIcon = event.target.closest('.delete-icon');
		if (!deleteIcon) {
			return;
		}
		const table = this.table.current.nativeElement,
			rowId = deleteIcon.getAttribute('row-id'),
			tableRowObject = table.rowById[rowId];
		table.rows.splice(tableRowObject.data.$.index, 1);
	}

	handleButtonClick() {
		this.table.current.nativeElement.rows.push({});
	}

	init() {

	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Server-Side CRUD operations</h1>
When a new Table row is added, removed or updated a request with CRUD
			        data object is made via 'virtualDataSource' on the Server-Side Datasource.
			        The server uses the SQL query sent by the Server-Side Datasource to get
			        the rows which are then passed as the Pivot Table's data source and aggregated.
			        <br
					/>
					<br />This example uses a demo server with AlaSQL that generates SQL to show
			        how a real server might use the requests sent by the Table. The Server-Side
			        Table usage does not have any restrictions on the server-side technologies
			        used.</div>
				<div id="tableContainer">
					<Table ref={this.table} id="table"
						dataSource={this.dataSource}
						editing={this.editing}
						editMode={this.editMode}
						filtering={this.filtering}
						filterRow={this.filterRow}
						keyboardNavigation={this.keyboardNavigation}
						pageSize={this.pageSize}
						sortMode={this.sortMode}
						columns={this.columns}
						onClick={this.handleTableClick.bind(this)}></Table>
					<Button id="addNewRow" className="primary" title="Add new row" onClick={this.handleButtonClick.bind(this)}>+</Button>
				</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					freezeHeader={this.freezeHeader}
					grandTotal={this.grandTotal}
					keyboardNavigation={this.keyboardNavigation}
					rowTotals={this.rowTotals}
					columns={this.pivotTableColumns}></PivotTable>
				<br />
				<br />
				<h3>SQL Query</h3>
				<div id="query"></div>
				<br />
				<br />
				<h3>Data</h3>
				<div id="dataLog"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

function LogData(data) {
	const log = document.getElementById('dataLog');
	let content = '<table>';
	for (let i = 0; i < data.length; i++) {
		let row = '<tr>';
		if (i === 0) {
			for (let column in data[i]) {
				row += '<td>' + column + '</td>';
			}
			row += '</tr>';
		}
		content += row;
		row = '<tr>';
		for (let column in data[i]) {
			row += '<td>' + data[i][column] + '</td>';
		}
		row += '</tr>';
		content += row;
	}
	content += '</table>';
	log.innerHTML = content;
}
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
function DemoServer() {
	window.alasql.options.cache = false;
	createTable();
	return {
		getData: function (request) {
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				lastId: queryResult.lastId,
				length: queryResult.length
			};
		},
	};

	function createTable() {
		executeQuery('CREATE TABLE Customers (CustomerID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,CustomerName NVARCHAR(255),Age INTEGER, Sex ENUM("M", "F"), ContactName NVARCHAR(255),Address NVARCHAR(255),City NVARCHAR(255),PostalCode NVARCHAR(255),Country NVARCHAR(255))');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Alfreds Futterkiste",23,"F","Maria Anders","Obere Str. 57","Berlin","12209","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Ana Trujillo Emparedados y helados",81,"F","Ana Trujillo","Avda. de la Constitución 2222","México D.F.","05021","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Antonio Moreno Taquería",40,"M","Antonio Moreno","Mataderos 2312","México D.F.","05023","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Around the Horn",22,"M","Thomas Hardy","120 Hanover Sq.","London","WA1 1DP","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Berglunds snabbköp",18,"F","Christina Berglund","Berguvsvägen 8","Luleå","S-958 22","Sweden")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Noel Vega Inc.",53,"M","Noel Vega","3088 Pockrus Page Rd1","Stockholm","S-958 22","Sweden")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Kara & Co",47,"F","Kara W Griffin","512 Center Street","Stuttgart","97448","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Cheney",22,"F","Erica W Cheney","4922 Pick Street","Denver","80216","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Jerry Bee",19,"M","Jerry B Davis","993 Lowndes Hill Park Road","London","91350","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Zal",33,"M","Chris E Aguirre","3563 Black Stallion Road","Berlin","45242","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,Age,Sex,ContactName,Address,City,PostalCode,Country) VALUES ("Avto-moto OOD",50,"F","Victoria Mihova","Plovdiv","33 Shipchenska","1892","Bulgaria")');
	}

	function executeQuery(query) {
		return window.alasql(query);
	}

	function executeSql(request) {
		let lastId;
		window.query.innerHTML = '';
		// Deletes a Row.
		if (request.action === 'remove') {
			const sqlDeleteQuery = 'DELETE FROM Customers' + request.query['remove'];
			window.alasql(sqlDeleteQuery);
			window.query.innerHTML = sqlDeleteQuery;
		}
		// Adds a Row.
		else if (request.action === 'add') {
			const sqlAddQuery = 'INSERT Customers' + request.query['add'];
			window.alasql(sqlAddQuery);
			lastId = window.alasql.tables['Customers'].identities.CustomerID.value;
			window.query.innerHTML = sqlAddQuery;
		}
		// Updates a Row.
		else if (request.action === 'update') {
			const sqlUpdateQuery = 'UPDATE Customers' + request.query['update'];
			window.alasql(sqlUpdateQuery);
			window.query.innerHTML = sqlUpdateQuery;
		}
		// SQL Select query.
		const sql = 'SELECT * FROM Customers' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
		// SQL Records Count query.
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Customers ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		if (window.query.innerHTML === '') {
			window.query.innerHTML = sql;
		}
		return {
			data: result,
			lastId: lastId,
			length: length
		};
	}
}

export default App;
