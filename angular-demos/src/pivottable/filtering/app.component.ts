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
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

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
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
    ];

    enableAll() {
        this.button.disabled = false;
        this.button2.disabled = false;
        this.button3.disabled = false;
        this.button4.disabled = false;
    }

    filter1Click() {
        const filterGroup = new window.Smart.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'espresso', 'CONTAINS');
        filterGroup.addFilter('or', filterObject);
        this.pivottable.clearFilters();
        this.pivottable.addFilter('productName', filterGroup);
        this.enableAll();
        this.button.disabled = true;
    }

    filter2Click() {
        const filterGroup = new window.Smart.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('number', 5, 'GREATER_THAN');
        filterGroup.addFilter('or', filterObject);
        this.pivottable.clearFilters();
        this.pivottable.addFilter('quantity', filterGroup);
        this.enableAll();
        this.button2.disabled = true;
    }

    filter3Click() {
        const filterGroup1 = new window.Smart.Utilities.FilterGroup(), filterObject1 = filterGroup1.createFilter('string', 'Andrew', 'EQUAL'), filterGroup2 = new window.Smart.Utilities.FilterGroup(), filterObject2 = filterGroup2.createFilter('string', 'Ohno', 'EQUAL');
        filterGroup1.addFilter('or', filterObject1);
        filterGroup2.addFilter('or', filterObject2);
        this.pivottable.clearFilters();
        this.pivottable.addFilter('firstName', filterGroup1);
        this.pivottable.addFilter('lastName', filterGroup2);
        this.enableAll();
        this.button3.disabled = true;
    }

    clearFiltersClick() {
        this.pivottable.clearFilters();
        this.enableAll();
        this.button4.disabled = true;
    }

    init(): void {
        // init code.
    }
}