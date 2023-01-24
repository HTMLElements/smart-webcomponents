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
        dataSource: GetData(100),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        mode: 'cell'
    }

    onCellUpdate(cell, oldValue, value, confirm) {
        if (cell.column.dataField === 'quantity' && value) {
            if (value > 10) {
                setTimeout(() => {
                    confirm(true);
                }, 500);
            } else {
                setTimeout(() => {
                    confirm(false);
                }, 500);
            }
        } else {
            confirm(true);
        }
    }

    selection = {
        enabled: true,
        allowCellSelection: true,
        allowRowHeaderSelection: true,
        allowColumnHeaderSelection: true,
        mode: 'extended'
    }

    columns = [
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
    ]

    init(): void { }

}