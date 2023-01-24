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

    behavior = { rowResizeMode: 'growAndShrink' }

    layout = {
        rowHeight: 40
    }

    selection = {
        enabled: true,
        mode: 'extended'
    }

    appearance = {
        showRowHeader: true
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
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

        that.none.addEventListener('change', function (event) {
            if (that.none.checked) {
                that.grid.behavior.rowResizeMode = 'none';
            }
        });

        that.growAndShrink.addEventListener('change', function (event) {
            if (that.growAndShrink.checked) {
                that.grid.behavior.rowResizeMode = 'growAndShrink';
            }
        });

        that.split.addEventListener('change', function (event) {
            if (that.split.checked) {
                that.grid.behavior.rowResizeMode = 'split';
            }
        });

    }
}