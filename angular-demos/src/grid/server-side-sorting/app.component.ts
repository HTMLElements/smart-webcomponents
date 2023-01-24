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
	
	appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			const that = this;
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
		id: 'CustomerID',
		dataFields: [
			'CustomerID: string',
			'CustomerName: string',
			'ContactName: string',
			'Address: string',
			'City: string',
			'Country: string'
		]
	})
	
	columns = [
		{
			label: 'Id', dataField: 'CustomerID'
		},
		{ label: 'Customer Name', dataField: 'CustomerName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]
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
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Gourmet Lanchonetes","André Fonseca","Av. Brasil, 442","Campinas","04876-786","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Great Lakes Food Market","Howard Snyder","2732 Baker Blvd.","Eugene","97403","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("GROSELLA-Restaurante","Manuel Pereira","5ª Ave. Los Palos Grandes","Caracas","1081","Venezuela")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Hanari Carnes","Mario Pontes","Rua do Paço, 67","Rio de Janeiro","05454-876","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("HILARIÓN-Abastos","Carlos Hernández","Carrera 22 con Ave. Carlos Soublette #8-35","San Cristóbal","5022","Venezuela")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Hungry Coyote Import Store","Yoshi Latimer","City Center Plaza 516 Main St.","Elgin","97827","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Hungry Owl All-Night Grocers","Patricia McKenna","8 Johnstown Road","Cork","","Ireland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Island Trading","Helen Bennett","Garden House Crowther Way","Cowes","PO31 7PJ","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Königlich Essen","Philip Cramer","Maubelstr. 90","Brandenburg","14776","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("La corne d\'abondance","Daniel Tonini","67, avenue de l\'Europe","Versailles","78000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("La maison d\'Asie","Annette Roulet","1 rue Alsace-Lorraine","Toulouse","31000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Laughing Bacchus Wine Cellars","Yoshi Tannamuri","1900 Oak St.","Vancouver","V3F 2K1","Canada")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Lazy K Kountry Store","John Steel","12 Orchestra Terrace","Walla Walla","99362","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Lehmanns Marktstand","Renate Messner","Magazinweg 7","Frankfurt a.M. ","60528","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Let\'s Stop N Shop","Jaime Yorres","87 Polk St. Suite 5","San Francisco","94117","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("LILA-Supermercado","Carlos González","Carrera 52 con Ave. Bolívar #65-98 Llano Largo","Barquisimeto","3508","Venezuela")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("LINO-Delicateses","Felipe Izquierdo","Ave. 5 de Mayo Porlamar","I. de Margarita","4980","Venezuela")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Lonesome Pine Restaurant","Fran Wilson","89 Chiaroscuro Rd.","Portland","97219","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Magazzini Alimentari Riuniti","Giovanni Rovelli","Via Ludovico il Moro 22","Bergamo","24100","Italy")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Maison Dewey","Catherine Dewey","Rue Joseph-Bens 532","Bruxelles","B-1180","Belgium")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Mère Paillarde","Jean Fresnière","43 rue St. Laurent","Montréal","H1J 1C3","Canada")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Morgenstern Gesundkost","Alexander Feuer","Heerstr. 22","Leipzig","04179","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("North/South","Simon Crowther","South House 300 Queensbridge","London","SW7 1RZ","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Océano Atlántico Ltda.","Yvonne Moncada","Ing. Gustavo Moncada 8585 Piso 20-A","Buenos Aires","1010","Argentina")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Old World Delicatessen","Rene Phillips","2743 Bering St.","Anchorage","99508","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Ottilies Käseladen","Henriette Pfalzheim","Mehrheimerstr. 369","Köln","50739","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Paris spécialités","Marie Bertrand","265, boulevard Charonne","Paris","75012","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Pericles Comidas clásicas","Guillermo Fernández","Calle Dr. Jorge Cash 321","México D.F.","05033","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Piccolo und mehr","Georg Pipps","Geislweg 14","Salzburg","5020","Austria")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Princesa Isabel Vinhoss","Isabel de Castro","Estrada da saúde n. 58","Lisboa","1756","Portugal")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Que Delícia","Bernardo Batista","Rua da Panificadora, 12","Rio de Janeiro","02389-673","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Queen Cozinha","Lúcia Carvalho","Alameda dos Canàrios, 891","São Paulo","05487-020","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("QUICK-Stop","Horst Kloss","Taucherstraße 10","Cunewalde","01307","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Rancho grande","Sergio Gutiérrez","Av. del Libertador 900","Buenos Aires","1010","Argentina")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Rattlesnake Canyon Grocery","Paula Wilson","2817 Milton Dr.","Albuquerque","87110","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Reggiani Caseifici","Maurizio Moroni","Strada Provinciale 124","Reggio Emilia","42100","Italy")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Ricardo Adocicados","Janete Limeira","Av. Copacabana, 267","Rio de Janeiro","02389-890","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Richter Supermarkt","Michael Holz","Grenzacherweg 237","Genève","1203","Switzerland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Romero y tomillo","Alejandra Camino","Gran Vía, 1","Madrid","28001","Spain")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Santé Gourmet","Jonas Bergulfsen","Erling Skakkes gate 78","Stavern","4110","Norway")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Save-a-lot Markets","Jose Pavarotti","187 Suffolk Ln.","Boise","83720","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Seven Seas Imports","Hari Kumar","90 Wadhurst Rd.","London","OX15 4NB","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Simons bistro","Jytte Petersen","Vinbæltet 34","København","1734","Denmark")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Spécialités du monde","Dominique Perrier","25, rue Lauriston","Paris","75016","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Split Rail Beer & Ale","Art Braunschweiger","P.O. Box 555","Lander","82520","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Suprêmes délices","Pascale Cartrain","Boulevard Tirou, 255","Charleroi","B-6000","Belgium")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("The Big Cheese","Liz Nixon","89 Jefferson Way Suite 2","Portland","97201","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("The Cracker Box","Liu Wong","55 Grizzly Peak Rd.","Butte","59801","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Toms Spezialitäten","Karin Josephs","Luisenstr. 48","Münster","44087","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Tortuga Restaurante","Miguel Angel Paolino","Avda. Azteca 123","México D.F.","05033","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Tradição Hipermercados","Anabela Domingues","Av. Inês de Castro, 414","São Paulo","05634-030","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Trail\'s Head Gourmet Provisioners","Helvetius Nagy","722 DaVinci Blvd.","Kirkland","98034","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Vaffeljernet","Palle Ibsen","Smagsløget 45","Århus","8200","Denmark")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Victuailles en stock","Mary Saveley","2, rue du Commerce","Lyon","69004","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Vins et alcools Chevalier","Paul Henriot","59 rue de l\'Abbaye","Reims","51100","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Die Wandernde Kuh","Rita Müller","Adenauerallee 900","Stuttgart","70563","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Wartian Herkku","Pirkko Koskitalo","Torikatu 38","Oulu","90110","Finland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Wellington Importadora","Paula Parente","Rua do Mercado, 12","Resende","08737-363","Brazil")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("White Clover Markets","Karl Jablonski","305 - 14th Ave. S. Suite 3B","Seattle","98128","USA")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Wilman Kala","Matti Karttunen","Keskuskatu 45","Helsinki","21240","Finland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Wolski","Zbyszek","ul. Filtrowa 68","Walla","01-012","Poland")');
	}
	function executeQuery(query) {
		window.alasql(query);
	}
	function executeSql(request) {
		const sql = 'SELECT * FROM Customers' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Customers ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		window.query.innerHTML = sql;
		return { data: result, length: length };
	}
}