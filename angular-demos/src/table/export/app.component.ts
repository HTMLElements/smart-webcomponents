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
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(50),
        dataFields: [
            'id: number',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string'
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number'
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number'
    },
    {
        label: 'Date Purchased',
        dataField: 'date',
        dataType: 'date'
    }
    ];

    handleClick(event: Event, type: String) {
        this.table.exportData(type, 'table');
    }

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