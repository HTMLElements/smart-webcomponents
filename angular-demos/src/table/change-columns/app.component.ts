import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    allColumns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Reports To',
        dataField: 'reportsto',
        dataType: 'number'
    },
    {
        label: 'First Name',
        dataField: 'firstName',
        dataType: 'string'
    },
    {
        label: 'Last Name',
        dataField: 'lastName',
        dataType: 'string'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string'
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number'
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number'
    },
    {
        label: 'Total',
        dataField: 'total',
        dataType: 'number'
    },
    {
        label: 'Date',
        dataField: 'date',
        dataType: 'date'
    },
    {
        label: 'Available',
        dataField: 'available',
        dataType: 'boolean'
    }
    ];

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(15),
        dataFields: [
            'id: number',
            'reportsto: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'price: number',
            'quantity: number',
            'total: number',
            'date: date',
            'available: boolean'
        ]
    });

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Reports To',
        dataField: 'reportsto',
        dataType: 'number'
    },
    {
        label: 'First Name',
        dataField: 'firstName',
        dataType: 'string'
    },
    {
        label: 'Last Name',
        dataField: 'lastName',
        dataType: 'string'
    }
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

        const that = this,
            table = that.table,
            add = that.button,
            remove = that.button2,
            shuffle = that.button3;

        add.addEventListener('click', function () {
            for (let i = 0; i < that.allColumns.length; i++) {
                if (!table.columns.find(column => column.dataField === that.allColumns[i].dataField)) {
                    table.columns.push(that.allColumns[i]);
                    break;
                }
            }
            remove.disabled = false;

            if (table.columns.length === that.allColumns.length) {
                add.disabled = true;
            }
        });

        remove.addEventListener('click', function () {
            table.columns.pop();
            add.disabled = false;
            if (table.columns.length === 0) {
                remove.disabled = true;
            }
        });

        shuffle.addEventListener('click', function () {
            table.columns = table.columns.sort(function () {
                return 0.5 - Math.random();
            });
        });


    }
}