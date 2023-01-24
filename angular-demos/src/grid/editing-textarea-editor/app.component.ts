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


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'date: date',
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        mode: 'cell'
    }

    columns = [
        { label: 'First Name', dataField: 'firstName', editor: 'textArea' },
        { label: 'Last Name', dataField: 'lastName', editor: 'textArea' },
        {
            label: 'Product', dataField: 'productName', width: 150, editor: 'textArea'
        },
        {
            label: 'Quantity', dataField: 'quantity', editor: 'numberInput'
        },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
    ]

    init(): void { }

}