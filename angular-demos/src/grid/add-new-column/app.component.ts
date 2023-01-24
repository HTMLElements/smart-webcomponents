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
            'date: date',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });
    selection = {
        enabled: true,
        allowCellSelection: true,
        allowRowHeaderSelection: true,
        allowColumnHeaderSelection: true,
        mode: 'extended'
    };
    behavior = {
        columnResizeMode: 'split'
    };
    sorting = {
        enabled: true
    };
    filtering = {
        enabled: true
    };
    editing = {
        enabled: true,
        addNewColumn: {
            visible: true
        },
        mode: 'cell'
    };
    columns = [
        {
            label: 'First Name', dataField: 'firstName', editor: {
                required: true,
                template: 'input'
            }
        },
        {
            label: 'Last Name', dataField: 'lastName', editor: {
                required: true,
                template: 'input'
            }
        },
        {
            label: 'Product', width: 200, dataField: 'productName', editor: {
                required: true,
                template: 'dropDownList'
            }
        },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
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