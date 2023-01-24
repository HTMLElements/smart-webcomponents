import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    paging = {
        enabled: true,
        pageSize: 10,
        pageIndex: 0
    }

    pager = {
        position: 'far',
        visible: true
    }

    dataSource = new Smart.DataAdapter({
        virtualDataSourceLength: 10000,
        virtualDataSourceCache: false,
        virtualDataSource: function (resultCallbackFunction, details) {
            setTimeout(function () {
                resultCallbackFunction({
                    dataSource: GetData(details.first, details.last)
                });
            }, 300);
        },
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })

    columns = [
        'id',
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity' },
        { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', cellsFormat: 'c2' }
    ]

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