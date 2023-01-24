import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(10),
        dataFields: [
            'id: number',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });

    editing: Boolean = true;

    editMode: String = 'cell';

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string',
        validation(value: String) {
            if (value === '') {
                return {
                    message: 'Product name is required!'
                };
            }
            return true;
        }
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number',
        validation(value: number) {
            if (isNaN(value) || value <= 5) {
                return {
                    message: 'Quantity has to be larger than 5!'
                };
            }
            return true;
        }
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number',
        validation(value: number) {
            if (isNaN(value) || value <= 0) {
                return false;
            }
            return true;
        }
    },
    {
        label: 'Date Purchased',
        dataField: 'date',
        dataType: 'date',
        validation(value: Date) {
            if (value.getTime() > new Date().getTime()) {
                return false;
            }
            return true;
        }
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
    }
}