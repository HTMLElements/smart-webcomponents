import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(50),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });
    freezeHeader = true;
    keyboardNavigation = true;
    onColumnRender = function (settings: { text: string, cell: HTMLTableCellElement, column: any, fullDefinition: any }) {
        if (settings.text === 'Group') {
            settings.text = settings.column.originalColumn.label.toUpperCase();
            return;
        }
        if (settings.column.summary) {
            settings.text = 'Σ(' + settings.column.originalColumn.label + ')';
        }
        if (settings.fullDefinition.dataFields[0].label.toLowerCase().indexOf('espresso') !== -1) {
            settings.cell.classList.add('highlight');
        }
    };
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        {
            label: 'Last Name', dataField: 'lastName', dataType: 'string', allowRowGroup: true, rowGroup: true,
            formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template!: any }) {
                settings.template = `<strong>${settings.value}</strong>`;
            }
        },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', summary: 'sum' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' } // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
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