import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CardViewComponent } from 'smart-webcomponents-angular/cardview';

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
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('cardview', { read: CardViewComponent, static: false }) cardview!: CardViewComponent;

    addNewButton = true;
    cellOrientation = 'horizontal';
    dataSource = new window.Smart.DataAdapter({
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
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
            'Age: number',
            'Sex: string',
            'Address: string',
            'PostalCode: string',
            'City: string',
            'Country: string'
        ]
    });
    editable = true;
    headerPosition = 'top';
    scrolling = 'virtual';
    titleField = 'CustomerName';
    columns = [
        {
            label: 'Id', dataField: 'CustomerID', icon: 'CustomerID', formatFunction: function (settings: { value: any; template: string; }) {
                settings.template = `<span class="smart-badge smart-badge-dark">${settings.value}</span>`;
            }
        },
        { label: 'Customer Name', dataField: 'CustomerName' },
        { label: 'Contact Name', dataField: 'ContactName', icon: 'ContactName' },
        { label: 'Age', dataField: 'Age', icon: 'Age' },
        { label: 'Sex', dataField: 'Sex', icon: 'Sex' },
        { label: 'Address', dataField: 'Address', icon: 'Address' },
        { label: 'Postal Code', dataField: 'PostalCode', icon: 'PostalCode' },
        { label: 'City', dataField: 'City', icon: 'City' },
        { label: 'Country', dataField: 'Country', icon: 'Country' }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}
function LogData(data: any) {
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
        getData: function (request: any) {
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
    function executeQuery(query: string) {
        return window.alasql(query);
    }
    function executeSql(request: any) {
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
        return { data: result, lastId: lastId, length: length };
    }
}