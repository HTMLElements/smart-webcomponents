import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MultiColumnFilterPanelComponent } from 'smart-webcomponents-angular/multicolumnfilterpanel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('multicolumnfilterpanel', { read: MultiColumnFilterPanelComponent, static: false }) multicolumnfilterpanel!: MultiColumnFilterPanelComponent;

    dataSource = [
        { label: 'First Name', dataField: 'firstName', icon: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', icon: 'lastName', dataType: 'string' },
        { label: 'Birthday', dataField: 'birthday', icon: 'birthday', dataType: 'date' },
        { label: 'Pet Name', dataField: 'petName', icon: 'petName', dataType: 'string' },
        { label: 'Country', dataField: 'country', icon: 'country', dataType: 'string' },
        { label: 'Product Name', dataField: 'productName', icon: 'productName', dataType: 'string' },
        { label: 'Price', dataField: 'price', icon: 'price', dataType: 'number' },
        { label: 'Quantity', dataField: 'quantity', icon: 'quantity', dataType: 'number' },
        { label: 'Time of Purchase', dataField: 'timeOfPurchase', icon: 'timeOfPurchase', dataType: 'date' },
        { label: 'Expired', dataField: 'expired', icon: 'expired', dataType: 'boolean' }
    ];
    operator = 'or';
    value = [
        ['firstName', 'EQUAL', 'Peter'],
        ['birthday', 'LESS_THAN_OR_EQUAL', new Date(2015, 0, 1)],
        ['expired', 'EQUAL', false],
        ['expired', 'NULL'],
        ['price', 'LESS_THAN', 500],
        ['productName', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'oa']
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