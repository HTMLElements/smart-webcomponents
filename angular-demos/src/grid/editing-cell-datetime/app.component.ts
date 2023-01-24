import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
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
    editing = {
        enabled: true,
        mode: 'cell'
    };
    columns = [
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        {
            label: 'Time', dataType: 'date', dataField: 'time', cellsFormat: 'hh:mm tt', editor: 'timeInput', formatFunction(settings) {
                if (!settings.value) {
                    settings.value = '12:00 AM';
                }
            }
        },
        { label: 'Date', dataField: 'date', cellsFormat: 'd', editor: 'dateInput' },
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