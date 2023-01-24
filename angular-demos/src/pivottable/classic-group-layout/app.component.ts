import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    generateData(rowscount: number) {
        const data = new Array();
        const firstNames = [
            'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi'
        ];
        const lastNames = [
            'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase'
        ];
        const productNames = [
            'Black Tea', 'Green Tea', 'Caffe Espresso'
        ];
        const priceValues = [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
        ];
        for (let i = 0; i < rowscount; i++) {
            const row = {};
            const productindex = Math.floor(Math.random() * productNames.length);
            const price = parseFloat(priceValues[productindex]);
            const quantity = 1 + Math.round(Math.random() * 10);
            row['id'] = i;
            row['reportsto'] = Math.floor(Math.random() * firstNames.length);
            if (i % Math.floor(Math.random() * firstNames.length) === 0) {
                row['reportsto'] = null;
            }
            row['available'] = productindex % 2 === 0;
            row['firstName'] = firstNames[Math.floor(Math.random() * firstNames.length)];
            row['lastName'] = lastNames[Math.floor(Math.random() * lastNames.length)];
            row['name'] = row['firstName'] + ' ' + row['lastName'];
            row['productName'] = productNames[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            const date = new Date();
            date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
            date.setHours(0, 0, 0, 0);
            row['date'] = date;
            data[i] = row;
        }
        return data;
    }

    dataSource = new window.Smart.DataAdapter({
        dataSource: this.generateData(100),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'available: boolean',
            'date: date'
        ]
    });
    freezeHeader = true;
    groupLayout = 'classic';
    keyboardNavigation = true;
    onInit = function () {
        this.rows[0].expanded = true;
        this.rows[1].expanded = true;
    };
    columns = [
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Available', dataField: 'available', dataType: 'boolean', allowRowGroup: true, rowGroup: true },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
    ];

    handleChange = (event: CustomEvent) => {
        if (event.detail.value) {
            this.pivottable.groupLayout = 'default';
            this.togglebutton.nativeElement.innerHTML = 'classic';
        }
        else {
            this.pivottable.groupLayout = 'classic';
            this.togglebutton.nativeElement.innerHTML = 'default';
        }
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
    }
}