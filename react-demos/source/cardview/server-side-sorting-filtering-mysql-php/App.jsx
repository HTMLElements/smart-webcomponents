import React from "react";
import ReactDOM from "react-dom";
import { CardView } from 'smart-webcomponents-react/cardview';

class App extends React.Component {
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
	});
	headerPosition = 'top';
	scrolling = 'virtual';
	titleField = 'CompanyName';
	columns = [
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName', icon: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle', icon: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address', icon: 'Address' },
		{ label: 'City', dataField: 'City', icon: 'City' },
		{ label: 'Country', dataField: 'Country', icon: 'Country' }
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Server-Side Sort and Filter with MySQL and PHP</h1>
        Data in this demo is loaded on demand from MySql Database and especially the 'Customers' table of the
        Northwind Database. Server request is made when you change Sort or Filter. This is achieved by using the
        CardView's Data Virtualization in combination with DataAdapter's "virtualDataSource".
					<ul>
						<li>Filtering and sorting UI is enabled by setting the property <strong>headerPosition</strong> to <em>'top'</em> or <em>'bottom'</em>.</li>
						<li>The 'query' in the data request is used by the server to perform sorting and filtering.</li>
					</ul>
				</div>
				<CardView id="cardView"
					dataSource={this.dataSource}
					headerPosition={this.headerPosition}
					scrolling={this.scrolling}
					titleField={this.titleField}
					columns={this.columns}></CardView>
				<br />
				<br />
				<h3>SQL Query</h3>
				<div id="query"></div>
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
