import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {

	
    editing= {
		enabled: true,
		mode: 'cell'
	}
	
	sorting= {
		enabled: true
	}
	
	selection= {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
	}
	
	appearance= {
		alternationStart: 0,
		alternationCount: 2
	}
	
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
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
			}
			else {
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
			}
		},
		id: 'CustomerID',
		dataFields: [
			'CustomerID: string',
			'CustomerName: string',
			'ContactName: string',
			'Address: string',
			'PostalCode: string',
			'City: string',
			'Country: string'
		]
	})
	
	columns = [
		{ label: 'Customer Name', dataField: 'CustomerName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'Postal Code', dataField: 'PostalCode' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]
 
	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Server-Side Cell Edit</h1>When a cell is updated a request with CRUD data object is made via 'virtualDataSource'
			        on the Server-Side Datasource. The server uses the SQL query sent by the
			        Server-Side Datasource to get the rows. The type of query is stored in
			        the request's action property. Double-click on a cell to begin edit.
			        <br
			        />
			        <br />This example uses a demo server with AlaSQL that generates SQL to show
			        how a real server might use the requests sent by the Datagrid. The Server-Side
			        Datagrid usage does not have any restrictions on the server-side technologies
			        used.</div>
			    <Grid dataSource={this.dataSource} editing={this.editing} columns={this.columns} sorting={this.sorting} appearance={this.appearance} selection={this.selection} ref="grid" id="grid"></Grid>
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
export function DemoServer() {
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
		executeQuery('CREATE TABLE Customers (CustomerID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,CustomerName NVARCHAR(255),ContactName NVARCHAR(255),Address NVARCHAR(255),City NVARCHAR(255),PostalCode NVARCHAR(255),Country NVARCHAR(255))');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Alfreds Futterkiste","Maria Anders","Obere Str. 57","Berlin","12209","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Ana Trujillo Emparedados y helados","Ana Trujillo","Avda. de la Constitución 2222","México D.F.","05021","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Antonio Moreno Taquería","Antonio Moreno","Mataderos 2312","México D.F.","05023","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Around the Horn","Thomas Hardy","120 Hanover Sq.","London","WA1 1DP","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Berglunds snabbköp","Christina Berglund","Berguvsvägen 8","Luleå","S-958 22","Sweden")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Blauer See Delikatessen","Hanna Moos","Forsterstr. 57","Mannheim","68306","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Blondel père et fils","Frédérique Citeaux","24, place Kléber","Strasbourg","67000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bólido Comidas preparadas","Martín Sommer","C/ Araquil, 67","Madrid","28023","Spain")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bon app\'","Laurence Lebihans","12, rue des Bouchers","Marseille","13008","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bottom-Dollar Marketse","Elizabeth Lincoln","23 Tsawassen Blvd.","Tsawassen","T2F 8M4","Canada")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("B\'s Beverages","Victoria Ashworth","Fauntleroy Circus","London","EC2 5NT","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Cactus Comidas para llevar","Patricio Simpson","Cerrito 333","Buenos Aires","1010","Argentina")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Centro comercial Moctezuma","Francisco Chang","Sierras de Granada 9993","México D.F.","05022","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Chop-suey Chinese","Yang Wang","Hauptstr. 29","Bern","3012","Switzerland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Comércio Mineiro","Pedro Afonso","Av. dos Lusíadas, 23","São Paulo","05432-043","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Consolidated Holdings","Elizabeth Brown","Berkeley Gardens 12 Brewery ","London","WX1 6LT","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Drachenblut Delikatessend","Sven Ottlieb","Walserweg 21","Aachen","52066","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Du monde entier","Janine Labrune","67, rue des Cinquante Otages","Nantes","44000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Eastern Connection","Ann Devon","35 King George","London","WX3 6FW","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Ernst Handel","Roland Mendel","Kirchgasse 6","Graz","8010","Austria")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Familia Arquibaldo","Aria Cruz","Rua Orós, 92","São Paulo","05442-030","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("FISSA Fabrica Inter. Salchichas S.A.","Diego Roel","C/ Moralzarzal, 86","Madrid","28034","Spain")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Folies gourmandes","Martine Rancé","184, chaussée de Tournai","Lille","59000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Folk och fä HB","Maria Larsson","Åkergatan 24","Bräcke","S-844 67","Sweden")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Frankenversand","Peter Franken","Berliner Platz 43","München","80805","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("France restauration","Carine Schmitt","54, rue Royale","Nantes","44000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Franchi S.p.A.","Paolo Accorti","Via Monte Bianco 34","Torino","10100","Italy")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Furia Bacalhau e Frutos do Mar","Lino Rodriguez ","Jardim das rosas n. 32","Lisboa","1675","Portugal")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Galería del gastrónomo","Eduardo Saavedra","Rambla de Cataluña, 23","Barcelona","08022","Spain")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Godos Cocina Típica","José Pedro Freyre","C/ Romero, 33","Sevilla","41101","Spain")');
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
			lastId = window.alasql.tables["Customers"].identities.CustomerID.value;
			window.query.innerHTML = sqlAddQuery;
		}
		// Updates a Row.
		else if (request.action === 'update') {
			const sqlUpdateQuery = 'UPDATE Customers' + request.query['update'];
			window.alasql(sqlUpdateQuery);
			window.query.innerHTML = sqlUpdateQuery;
		}
		// SQL Select query.
		const sql = 'SELECT * FROM Customers' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'];
		// SQL Records Count query.
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Customers ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		if (window.query.innerHTML === '') {
			window.query.innerHTML = sql;
		}
		return { data: result, lastId: lastId, length: length };
	}
}
export default App;
