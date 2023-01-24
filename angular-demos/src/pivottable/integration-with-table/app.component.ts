import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;
    @ViewChild('mainContainer', { read: ElementRef, static: false }) mainContainer!: ElementRef;

    data = GetData(25);

    tableDataSource = new window.Smart.DataAdapter({
        dataSource: this.data,
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number'
        ]
    });

    tableColumns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
    ];

    pivotTableDataSource = new window.Smart.DataAdapter({
        dataSource: this.data,
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number'
        ]
    });

    pivotTableColumns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
    ];

    handleChange(event: CustomEvent) {
        if (event.detail.value) {
            this.mainContainer.nativeElement.classList.remove('table-mode');
            this.mainContainer.nativeElement.classList.add('pivot-mode');
        }
        else {
            this.mainContainer.nativeElement.classList.remove('pivot-mode');
            this.mainContainer.nativeElement.classList.add('table-mode');
            if (JSON.stringify((this.pivottable.columns as any).toArray(), ['dataField']) !==
                JSON.stringify((this.table.columns as any).toArray(), ['dataField'])) {
                this.table.columns = (this.pivottable.columns as any).toArray();
            }
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
        // init code.       
    }
}