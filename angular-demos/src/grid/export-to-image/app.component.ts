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
    @ViewChild('pngBtn', { read: ButtonComponent, static: false }) pngBtn!: ButtonComponent;
    @ViewChild('jpegBtn', { read: ButtonComponent, static: false }) jpegBtn!: ButtonComponent;
    @ViewChild('exportAllBtn', { read: ButtonComponent, static: false }) exportAllBtn!: ButtonComponent;
    @ViewChild('exportRestrictBtn', { read: ButtonComponent, static: false }) exportRestrictBtn!: ButtonComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    appearance = {
        alternationStart: 0,
        alternationCount: 2,
    }

    dataExport: {
        view: true,
        viewStart: 0,
        viewEnd: 50
    }

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
        {
            label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', formatFunction(formatObject) {
                formatObject.value = new Number(formatObject.cell.value).toFixed(2);
                formatObject.cell.background = '#007ACC';
                formatObject.cell.color = '#fff';
            }
        }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.pngBtn.addEventListener('click', () => {
            that.grid.exportData('png');
        });

        that.jpegBtn.addEventListener('click', () => {
            that.grid.exportData('jpeg');
        });

        that.exportAllBtn.addEventListener('click', () => {
            that.grid.dataExport.viewStart = null;
            that.grid.dataExport.viewEnd = null;
            that.grid.dataExport.view = false;
            that.grid.exportData('png');
            that.grid.dataExport.viewStart = 0;
            that.grid.dataExport.viewEnd = 50;
        });

        that.exportRestrictBtn.addEventListener('click', () => {
            that.grid.dataExport.viewStart = 25;
            that.grid.dataExport.viewEnd = 50;
            that.grid.dataExport.view = true;
            that.grid.exportData('png');
            that.grid.dataExport.viewStart = 0;
            that.grid.dataExport.viewEnd = 50;
        });
    }
}