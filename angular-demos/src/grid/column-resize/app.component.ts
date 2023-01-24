import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('none', { read: RadioButtonComponent, static: false }) none!: RadioButtonComponent;
    @ViewChild('split', { read: RadioButtonComponent, static: false }) split!: RadioButtonComponent;
    @ViewChild('growAndShrink', { read: RadioButtonComponent, static: false }) growAndShrink!: RadioButtonComponent;

    behavior = { columnResizeMode: 'growAndShrink' }

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
        {
            label: 'First Name', width: 150, dataField: 'firstName'
        },
        { label: 'Last Name', width: 150, dataField: 'lastName' },
        { label: 'Product', width: 200, dataField: 'productName' },
        { label: 'Quantity', width: 100, dataField: 'quantity' },
        { label: 'Unit Price', width: 100, dataField: 'price', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', width: 200, cellsFormat: 'c2' }
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

        that.none.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.grid.behavior.columnResizeMode = 'none';
            }
        });

        that.split.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.grid.behavior.columnResizeMode = 'split';
            }
        });

        that.growAndShrink.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.grid.behavior.columnResizeMode = 'growAndShrink';
            }
        });

    }
}