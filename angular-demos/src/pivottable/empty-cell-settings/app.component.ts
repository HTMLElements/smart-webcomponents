import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton: ToggleButtonComponent;
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;
    @ViewChild('toggleButtonLabel', { read: ElementRef, static: false }) toggleButtonLabel!: ElementRef;

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
    nullDefaultValue = 0;
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
    ];

    changeHandler = (event: CustomEvent) => {
        const that = this;

        if (event.detail.value) {
            that.pivottable.nullDefaultValue = null;
            that.toggleButtonLabel.nativeElement.innerHTML = '0';
        }
        else {
            that.pivottable.nullDefaultValue = 0;
            that.toggleButtonLabel.nativeElement.innerHTML = 'null';
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