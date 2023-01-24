import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';

declare global {
    interface Window {
        query: HTMLElement;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
            const sqlQuery = details.query;
            window.query.innerHTML = 'SELECT CompanyName, ContactName, ContactTitle, Country, Address, City FROM Customers' + sqlQuery['where'] + sqlQuery['groupBy'] + sqlQuery['orderBy'] + sqlQuery['limit'];
            new window.Smart.Ajax({
                url: 'grid_data.php',
                dataSourceType: 'json',
                data: details.query
            }, (response: any) => {
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
    filtering = true;
    filterRow = true;
    sortMode = 'one';
    paging = true;
    columns = [
        { label: 'Company Name', dataField: 'CompanyName' },
        { label: 'Contact Name', dataField: 'ContactName' },
        { label: 'Contact Title', dataField: 'ContactTitle' },
        { label: 'Address', dataField: 'Address' },
        { label: 'City', dataField: 'City' },
        { label: 'Country', dataField: 'Country' }
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