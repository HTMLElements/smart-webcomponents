import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CardViewComponent } from 'smart-webcomponents-angular/cardview';

declare global {
    interface Window {
        query: HTMLElement;
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
