import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	
    sorting = {
		enabled: true
	}
	
	appearance = {
		showRowHeaderNumber: true,
		allowRowDetailToggleAnimation: true
	}
	
	selection = {
		enabled: true
	}
	
	onRowInit = (index, row) => {
		if (index === 0) {
			row.showDetail = true;
		}
	}
	
	onRowDetailInit = (index, row, detail) => {
		const grid = document.createElement('div');
		detail.appendChild(grid);
		const gridInstance = new window.smartGrid(grid, {
			selection: { enabled: true },
			sorting: { enabled: true },
			dataSource: new window.Smart.DataAdapter({
				virtualDataSource: function (resultCallbackFunction, details) {
					const that = this;
					details.query['table'] = 'Products';
					details.query['where'] = 'WHERE CategoryID = ' + row.data.CategoryID;
					if (details.action === 'dataBind') {
						const result = window.demoServer.getData(details);
						resultCallbackFunction({
							dataSource: result.data,
							virtualDataSourceLength: result.length
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
				id: 'ProductID',
				dataFields: [
					'ProductName: string',
					'Unit: string',
					'Price: number'
				]
			}),
			columns: [
				{ label: 'Product Name', dataField: 'ProductName' },
				{ label: 'Unit', dataField: 'Unit' },
				{ label: 'Price', cellsFormat: 'c2', cellsAlign: 'right', dataField: 'Price' }
			]
		});
	}
	
	rowDetail = {
		enabled: true,
		visible: true,
		height: 300,
		dialog: {
			width: 600,
			height: 500,
			enabled: true
		}
	}
	
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			const that = this;
			details.query['table'] = 'Categories';
			if (details.action === 'dataBind') {
				window.demoServer = DemoServer();
				const result = window.demoServer.getData(details);
				resultCallbackFunction({
					dataSource: result.data,
					virtualDataSourceLength: result.length
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
		id: 'CategoryID',
		dataFields: [
			'CategoryID: string',
			'CategoryName: string',
			'Description: string'
		]
	})
	
	columns = [
		{
			label: 'Id', width: 30, cellsAlign: 'center', align: 'center', dataField: 'CategoryID'
		},
		{ label: 'Category Name', dataField: 'CategoryName' },
		{ label: 'Description', dataField: 'Description' }
	]

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Server-Side Master Detail</h1>In this example, we use two Tables - 'Categories' and 'Products'. The
			        master Grid displays the 'Categories' table. When a row from the 'Categories'
			        table is expanded, a detail Grid with 'Products' matching the expanded
			        'CategoryID' is displayed in a popup dialog.
			        <br />
			        <br />This example uses a demo server with AlaSQL that generates SQL to show
			        how a real server might use the requests sent by the Datagrid. The Server-Side
			        Datagrid usage does not have any restrictions on the server-side technologies
			        used.</div>
			    <Grid ref="grid"  rowDetail={this.rowDetail} onRowInit={this.onRowInit} onRowDetailInit={this.onRowDetailInit} appearance={this.appearance} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} id="grid"></Grid>
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
export function DemoServer() {
	window.alasql.options.cache = false;
	createTable();
	return {
		getData: function (request) {
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				length: queryResult.length
			};
		},
	};
	function createTable() {
		executeQuery('CREATE TABLE Products (ProductID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,ProductName NVARCHAR(255),SupplierID INT,CategoryID INT,Unit NVARCHAR(255),Price MONEY)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (1,"Chais",1,1,"10 boxes x 20 bags",18)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (2,"Chang",1,1,"24 - 12 oz bottles",19)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (3,"Aniseed Syrup",1,2,"12 - 550 ml bottles",10)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (4,"Chef Anton\'s Cajun Seasoning",2,2,"48 - 6 oz jars",22)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (5,"Chef Anton\'s Gumbo Mix",2,2,"36 boxes",21.35)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (6,"Grandma\'s Boysenberry Spread",3,2,"12 - 8 oz jars",25)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (7,"Uncle Bob\'s Organic Dried Pears",3,7,"12 - 1 lb pkgs.",30)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (8,"Northwoods Cranberry Sauce",3,2,"12 - 12 oz jars",40)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (9,"Mishi Kobe Niku",4,6,"18 - 500 g pkgs.",97)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (10,"Ikura",4,8,"12 - 200 ml jars",31)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (11,"Queso Cabrales",5,4,"1 kg pkg.",21)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (12,"Queso Manchego La Pastora",5,4,"10 - 500 g pkgs.",38)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (13,"Konbu",6,8,"2 kg box",6)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (14,"Tofu",6,7,"40 - 100 g pkgs.",23.25)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (15,"Genen Shouyu",6,2,"24 - 250 ml bottles",15.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (16,"Pavlova",7,3,"32 - 500 g boxes",17.45)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (17,"Alice Mutton",7,6,"20 - 1 kg tins",39)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (18,"Carnarvon Tigers",7,8,"16 kg pkg.",62.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (19,"Teatime Chocolate Biscuits",8,3,"10 boxes x 12 pieces",9.2)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (20,"Sir Rodney\'s Marmalade",8,3,"30 gift boxes",81)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (21,"Sir Rodney\'s Scones",8,3,"24 pkgs. x 4 pieces",10)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (22,"Gustaf\'s Knäckebröd",9,5,"24 - 500 g pkgs.",21)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (23,"Tunnbröd",9,5,"12 - 250 g pkgs.",9)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (24,"Guaraná Fantástica",10,1,"12 - 355 ml cans",4.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (25,"NuNuCa Nuß-Nougat-Creme",11,3,"20 - 450 g glasses",14)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (26,"Gumbär Gummibärchen",11,3,"100 - 250 g bags",31.23)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (27,"Schoggi Schokolade",11,3,"100 - 100 g pieces",43.9)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (28,"Rössle Sauerkraut",12,7,"25 - 825 g cans",45.6)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (29,"Thüringer Rostbratwurst",12,6,"50 bags x 30 sausgs.",123.79)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (30,"Nord-Ost Matjeshering",13,8,"10 - 200 g glasses",25.89)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (31,"Gorgonzola Telino",14,4,"12 - 100 g pkgs",12.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (32,"Mascarpone Fabioli",14,4,"24 - 200 g pkgs.",32)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (33,"Geitost",15,4,"500 g",2.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (34,"Sasquatch Ale",16,1,"24 - 12 oz bottles",14)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (35,"Steeleye Stout",16,1,"24 - 12 oz bottles",18)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (36,"Inlagd Sill",17,8,"24 - 250 g jars",19)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (37,"Gravad lax",17,8,"12 - 500 g pkgs.",26)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (38,"Côte de Blaye",18,1,"12 - 75 cl bottles",263.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (39,"Chartreuse verte",18,1,"750 cc per bottle",18)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (40,"Boston Crab Meat",19,8,"24 - 4 oz tins",18.4)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (41,"Jack\'s New England Clam Chowder",19,8,"12 - 12 oz cans",9.65)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (42,"Singaporean Hokkien Fried Mee",20,5,"32 - 1 kg pkgs.",14)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (43,"Ipoh Coffee",20,1,"16 - 500 g tins",46)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (44,"Gula Malacca",20,2,"20 - 2 kg bags",19.45)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (45,"Røgede sild",21,8,"1k pkg.",9.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (46,"Spegesild",21,8,"4 - 450 g glasses",12)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (47,"Zaanse koeken",22,3,"10 - 4 oz boxes",9.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (48,"Chocolade",22,3,"10 pkgs.",12.75)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (49,"Maxilaku",23,3,"24 - 50 g pkgs.",20)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (50,"Valkoinen suklaa",23,3,"12 - 100 g bars",16.25)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (51,"Manjimup Dried Apples",24,7,"50 - 300 g pkgs.",53)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (52,"Filo Mix",24,5,"16 - 2 kg boxes",7)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (53,"Perth Pasties",24,6,"48 pieces",32.8)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (54,"Tourtière",25,6,"16 pies",7.45)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (55,"Pâté chinois",25,6,"24 boxes x 2 pies",24)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (56,"Gnocchi di nonna Alice",26,5,"24 - 250 g pkgs.",38)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (57,"Ravioli Angelo",26,5,"24 - 250 g pkgs.",19.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (58,"Escargots de Bourgogne",27,8,"24 pieces",13.25)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (59,"Raclette Courdavault",28,4,"5 kg pkg.",55)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (60,"Camembert Pierrot",28,4,"15 - 300 g rounds",34)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (61,"Sirop d\'érable",29,2,"24 - 500 ml bottles",28.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (62,"Tarte au sucre",29,3,"48 pies",49.3)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (63,"Vegie-spread",7,2,"15 - 625 g jars",43.9)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (64,"Wimmers gute Semmelknödel",12,5,"20 bags x 4 pieces",33.25)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (65,"Louisiana Fiery Hot Pepper Sauce",2,2,"32 - 8 oz bottles",21.05)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (66,"Louisiana Hot Spiced Okra",2,2,"24 - 8 oz jars",17)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (67,"Laughing Lumberjack Lager",16,1,"24 - 12 oz bottles",14)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (68,"Scottish Longbreads",8,3,"10 boxes x 8 pieces",12.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (69,"Gudbrandsdalsost",15,4,"10 kg pkg.",36)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (70,"Outback Lager",7,1,"24 - 355 ml bottles",15)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (71,"Fløtemysost",15,4,"10 - 500 g pkgs.",21.5)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (72,"Mozzarella di Giovanni",14,4,"24 - 200 g pkgs.",34.8)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (73,"Röd Kaviar",17,8,"24 - 150 g jars",15)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (74,"Longlife Tofu",4,7,"5 kg pkg.",10)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (75,"Rhönbräu Klosterbier",12,1,"24 - 0.5 l bottles",7.75)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (76,"Lakkalikööri",23,1,"500 ml ",18)');
		executeQuery('INSERT INTO Products (ProductID,ProductName,SupplierID,CategoryID,Unit,Price) VALUES (77,"Original Frankfurter grüne Soße",12,2,"12 boxes",13)');
		executeQuery('CREATE TABLE Categories (CategoryID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,CategoryName NVARCHAR(255),Description NVARCHAR(255))');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Beverages","Soft drinks, coffees, teas, beers, and ales")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Condiments","Sweet and savory sauces, relishes, spreads, and seasonings")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Confections","Desserts, candies, and sweet breads")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Dairy Products","Cheeses")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Grains/Cereals","Breads, crackers, pasta, and cereal")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Meat/Poultry","Prepared meats")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Produce","Dried fruit and bean curd")');
		executeQuery('INSERT INTO Categories (CategoryName,Description) VALUES ("Seafood","Seaweed and fish")');
	}
	function executeQuery(query) {
		window.alasql(query);
	}
	function executeSql(request) {
		const table = request.query['table'];
		const sql = 'SELECT * FROM ' + table + ' ' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from ' + table + ' ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from ' + table + ' ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		window.query.innerHTML = sql;
		return { data: result, length: length };
	}
}
export default App;
