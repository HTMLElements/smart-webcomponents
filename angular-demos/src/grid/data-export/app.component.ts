import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) xlsxBtn!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) pdfBtn!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) csvBtn!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) tsvBtn!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) xmlBtn!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) htmlBtn!: ButtonComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(100),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })

    columns = [
        'id',
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
        { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        const that = this;

        that.xlsxBtn.addEventListener('click', () => {
            that.grid.exportData('xlsx');
        });

        that.pdfBtn.addEventListener('click', () => {
            that.grid.exportData('pdf');
        });

        that.csvBtn.addEventListener('click', () => {
            that.grid.exportData('csv');
        });

        that.tsvBtn.addEventListener('click', () => {
            that.grid.exportData('tsv');
        });

        that.xmlBtn.addEventListener('click', () => {
            that.grid.exportData('xml');
        });

        that.htmlBtn.addEventListener('click', () => {
            that.grid.exportData('html');
        });
    }
}