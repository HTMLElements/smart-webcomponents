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

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(3000),
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
        { label: 'id', freeze: 'near', dataField: 'id', width: 100 },
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName', width: 250 },
        { label: 'Product', dataField: 'productName', width: 250 },
        { label: 'Quantity', dataField: 'quantity', align: 'right', width: 250, cellsAlign: 'right', },
        { label: 'Unit Price', dataField: 'price', align: 'right', width: 250, cellsAlign: 'right', cellsFormat: 'c2' },
        { label: 'Total', freeze: 'far', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ]

    onRowInit = (index, row) => {
        if (index === 2999) {
            row.freeze = 'far';
        }
        else if (index === 0) {
            row.freeze = 'near';
        }
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code

    }
}