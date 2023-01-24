import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new window.Smart.DataAdapter({
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
    });
    editing = {
        enabled: true,
        mode: 'row'
    };
    selection = {
        enabled: true,
        allowCellSelection: true,
        allowRowHeaderSelection: true,
        allowColumnHeaderSelection: true,
        mode: 'extended'
    };
    columns = [
        {
            label: 'First Name', dataField: 'firstName', validationRules: [{ type: 'required' }, { type: 'minLength', value: 5 }]
        },
        { label: 'Last Name', dataField: 'lastName', validationRules: [{ type: 'required' }, { type: 'minLength', value: 5 }] },
        { label: 'Product', dataField: 'productName', validationRules: [{ type: 'required' }, { type: 'minLength', value: 5 }] },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox', validationRules: [{ type: 'requiredTrue' }] },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput', validationRules: [{ type: 'max', value: 20 }, { type: 'min', value: 1 }] },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2', validationRules: [{ type: 'max', value: 20 }, { type: 'min', value: 1 }] }
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