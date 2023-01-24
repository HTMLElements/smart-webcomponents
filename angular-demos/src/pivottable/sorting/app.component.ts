import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
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
    sortMode = 'one';
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
    ];

    handleChange = (event: CustomEvent) => {
        this.pivottable.sortMode = event.detail.value ? 'many' : 'one';
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
        const pivottable = this.pivottable;

        pivottable.getDynamicColumns().then(function (dynamicColumns) {
            pivottable.sortBy(dynamicColumns[2], 'desc');
        });
    }
}