import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) headerLines!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) columnLines!: CheckBoxComponent;
    @ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) rowLines!: CheckBoxComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    behavior = { columnResizeMode: 'growAndShrink' }

    appearance = {
        alternationCount: 2,
        alternationStart: -1
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
        { label: 'Quantity', dataField: 'quantity' },
        { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', cellsFormat: 'c2' }
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

        that.headerLines.addEventListener('change', function (event) {
            that.grid.appearance.showColumnHeaderLines = that.headerLines.checked;
        });

        that.columnLines.addEventListener('change', function (event) {
            that.grid.appearance.showColumnLines = that.columnLines.checked;
        });

        that.rowLines.addEventListener('change', function (event) {
            that.grid.appearance.showRowLines = that.rowLines.checked;
        });
    }
}