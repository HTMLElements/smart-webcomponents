import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { DropDownList } from 'smart-webcomponents-angular/dropdownlist';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(10),
        dataFields: [
            'id: number',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });

    editing: Boolean = true;

    editMode: String = 'cell';

    columns: TableColumn[]  = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string',
        editor: {
            template: '<smart-drop-down-list></smart-drop-down-list>',
            onInit(row, column, editor: DropDownList, value) {
                editor.dataSource = ["Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"];
                editor.dropDownAppendTo = 'body';
            },
            onRender(row, column, editor: DropDownList, value) {
                editor.selectedValues = [value];
            },
            getValue(editor: DropDownList) {
                return editor.selectedValues[0];
            }
        }
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number'
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number'
    },
    {
        label: 'Date Purchased',
        dataField: 'date',
        dataType: 'date'
    }
    ];

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