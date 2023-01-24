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
        dataSource: GetData(30),
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
        {
            dataField: 'id', freeze: 'near', width: 30
        },
        {
            label: 'First Name', width: 200, dataField: 'firstName'
        },
        { label: 'Last Name', width: '25%', dataField: 'lastName' },
        { label: 'Product', width: '25%', dataField: 'productName' },
        { label: 'Quantity', width: '25%', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
        { label: 'Unit Price', width: '25%', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { freeze: 'far', label: 'Total', width: '25%', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
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