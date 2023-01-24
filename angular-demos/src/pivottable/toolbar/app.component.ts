import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    conditionalFormatting = [{
        column: 'quantity',
        condition: 'greaterThan',
        firstValue: 7,
        text: '#FFFFFF',
        highlight: '#6AA84F'
    },
    {
        column: 'quantity',
        condition: 'between',
        firstValue: 1,
        secondValue: 3,
        fontSize: '10px',
        text: '#FFFFFF',
        highlight: '#CC0000'
    }];
    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(25),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });
    freezeHeader = true;
    keyboardNavigation = true;
    toolbar = true;
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowPivot: true, allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
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