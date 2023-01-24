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
    @ViewChild('top', { read: RadioButtonComponent, static: false }) top!: RadioButtonComponent;
    @ViewChild('both', { read: RadioButtonComponent, static: false }) both!: RadioButtonComponent;
    @ViewChild('bottom', { read: RadioButtonComponent, static: false }) bottom!: RadioButtonComponent;

    appearance = {
        showRowHeaderNumber: true
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(15),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        action: 'click',
        addDialog: {
            enabled: true
        },
        addNewRow: {
            visible: true,
            position: 'both'
        }
    }

    columns = [
        {
            label: 'First Name', dataField: 'firstName'
        },
        {
            label: 'Last Name', dataField: 'lastName'
        },
        { label: 'Product', dataField: 'productName', editor: 'autoComplete' },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
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

        that.top.addEventListener('change', function () {
            if (that.top.checked) {
                that.grid.editing.addNewRow.position = 'near';
            }
        });

        that.both.addEventListener('change', function () {
            if (that.both.checked) {
                that.grid.editing.addNewRow.position = 'both';
            }
        });

        that.bottom.addEventListener('change', function () {
            if (that.bottom.checked) {
                that.grid.editing.addNewRow.position = 'far';
            }
        });
    }
}