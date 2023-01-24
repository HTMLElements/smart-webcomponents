import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(15),
        dataFields: [
            'id: number',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });
    columnReorder = true;
    selection = true;
    sortMode = 'many';
    columns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        {
            label: 'Quantity', dataField: 'quantity', dataType: 'number', formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template!: any }) {
                settings.template = settings.value + ' cups';
            }
        },
        { label: 'Price', dataField: 'price', dataType: 'number' },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
    ];

    getState() {
        this.table.getState().then(function (state) {
            alert(JSON.stringify(state));
        });
    }

    loadState() {
        this.table.loadState();
    }

    saveState() {
        this.table.saveState();
        this.button3.disabled = false;
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
        if (window.localStorage.getItem('smartTabletable')) {
            this.button3.disabled = false;
        }
    }
}