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
    @ViewChild('printBtn', { read: ButtonComponent, static: false }) printBtn!: ButtonComponent;
    @ViewChild('printRestrictBtn', { read: ButtonComponent, static: false }) printRestrictBtn!: ButtonComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    appearance = {
        alternationStart: 0,
        alternationCount: 2,
    }

    dataExport = {
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
            label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', formatFunction(settings) {
                settings.value = new Number(settings.cell.value).toFixed(2);
                settings.cell.background = '#007ACC';
                settings.cell.color = '#fff';
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

        that.printBtn.addEventListener('click', () => {
            that.grid.print();
        });

        that.printRestrictBtn.addEventListener('click', () => {
            that.grid.dataExport.viewStart = 25;
            that.grid.dataExport.viewEnd = 50;
            that.grid.dataExport.view = true;
            that.grid.print();
            that.grid.dataExport.viewStart = 0;
            that.grid.dataExport.viewEnd = 50;
        });
    }
}