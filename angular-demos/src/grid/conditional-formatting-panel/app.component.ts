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

    header = {
        visible: true,
        buttons: ['format']
    };
    conditionalFormatting = [
        {
            column: 'quantity',
            condition: 'greaterThan',
            firstValue: 8,
            text: '#FFFFFF',
            highlight: '#45D29A'
        },
        {
            column: 'quantity',
            condition: 'lessThan',
            firstValue: 3,
            text: '#FFFFFF',
            highlight: '#0984D9'
        },
        {
            column: 'quantity',
            condition: 'between',
            firstValue: 3,
            secondValue: 8,
            fontSize: '12px',
            text: '#ffffff',
            highlight: '#0C88DA'
        },
        {
            column: 'price',
            condition: 'lessThan',
            firstValue: 3,
            fontFamily: 'Courier New',
            text: '#FFFFFF',
            highlight: '#FF8F6B'
        },
        {
            column: 'price',
            condition: 'greaterThan',
            firstValue: 4,
            fontFamily: 'Courier New',
            text: '#FFFFFF',
            highlight: '#C43E1C'
        },
        {
            column: 'price',
            condition: 'between',
            firstValue: 3,
            secondValue: 4,
            fontFamily: 'Courier New',
            text: '#FFFFFF',
            highlight: '#D35230'
        },
        {
            column: 'total',
            condition: 'greaterThan',
            firstValue: 25,
            fontSize: '14px',
            text: '#FFFFFF',
            highlight: '#0D559D'
        },
        {
            column: 'total',
            condition: 'between',
            firstValue: 10,
            secondValue: 25,
            fontSize: '12px',
            text: '#ffffff',
            highlight: '#0883D8'
        },
        {
            column: 'total',
            condition: 'lessThan',
            firstValue: 10,
            fontSize: '10px',
            text: '#FFFFFF',
            highlight: '#31C1E7'
        }
    ];
    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });
    columns = [
        {
            label: 'Id', dataField: 'id', allowSort: false, allowHide: false
        },
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
        { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
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