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
    @ViewChild('enableCheckBox', { read: CheckBoxComponent, static: false }) enableCheckBox!: CheckBoxComponent;
    @ViewChild('selectAllCheckBox', { read: CheckBoxComponent, static: false }) selectAllCheckBox!: CheckBoxComponent;
    @ViewChild('positionCheckBox', { read: CheckBoxComponent, static: false }) positionCheckBox!: CheckBoxComponent;
    @ViewChild('clickCheckBox', { read: CheckBoxComponent, static: false }) clickCheckBox!: CheckBoxComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    selection = {
        enabled: true,
        mode: 'many',
        checkBoxes: {
            selectAllMode: 'page',
            enabled: true,
            position: 'far'
        }
    }

    paging: {
        enabled: true
    }

    pager: {
        visible: true
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(3000),
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
        // init code.
        const that = this;
        that.selectAllCheckBox.addEventListener('change', function (event) {
            that.grid.selection.checkBoxes.selectAllMode = that.selectAllCheckBox.checked ? 'page' : 'none';
        });

        that.enableCheckBox.addEventListener('change', function (event) {
            that.grid.selection.checkBoxes.enabled = that.enableCheckBox.checked;
        });

        that.positionCheckBox.addEventListener('change', function (event) {
            that.positionCheckBox.checked ? that.grid.selection.checkBoxes.position = 'far' : that.grid.selection.checkBoxes.position = 'near';
        });

        that.clickCheckBox.addEventListener('change', function (event) {
            that.clickCheckBox.checked ? that.grid.selection.action = 'click' : that.grid.selection.action = 'none';
        });


    }
}