import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

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
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(50),
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
    rowTotals = true;
    columns = [
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum', summarySettings: { align: 'center' } },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
    ];

    csvClick() {
        this.pivottable.exportData('csv', 'pivotTable');
    }

    htmlClick() {
        this.pivottable.exportData('html', 'pivotTable');
    }

    jsonClick() {
        this.pivottable.exportData('json', 'pivotTable');
    }

    pdfClick() {
        this.pivottable.exportData('pdf', 'pivotTable');
    }

    tsvClick() {
        this.pivottable.exportData('tsv', 'pivotTable');
    }

    xlsxClick() {
        this.pivottable.exportData('xlsx', 'pivotTable');
    }

    xmlClick() {
        this.pivottable.exportData('xml', 'pivotTable');
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