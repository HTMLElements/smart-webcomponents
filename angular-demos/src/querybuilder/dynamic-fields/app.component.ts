import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { QueryBuilderComponent } from 'smart-webcomponents-angular/querybuilder';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('querybuilder', { read: QueryBuilderComponent, static: false }) querybuilder: QueryBuilderComponent;
    @ViewChild('filterQueryValue', { read: ElementRef, static: false }) filterQueryValue: ElementRef;

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

        that.querybuilder.allowDrag = true;
        that.querybuilder.fields = [
            { label: 'Id', dataField: 'id', dataType: 'number', filterOperations: ['=', '<', '>'] },
            { label: 'Product', dataField: 'productName', dataType: 'string', filterOperations: ['='] },
            { label: 'Product code', dataField: 'productCode', dataType: 'string' },
            { label: 'Unit Price', dataField: 'price', dataType: 'number' },
            { label: 'Produced', dataField: 'produced', dataType: 'date', filterOperations: ['<', '>'] },
            { label: 'Purchased', dataField: 'purchased', dataType: 'dateTime' },
            { label: 'Available', dataField: 'available', dataType: 'boolean' }
        ];
        that.querybuilder.fieldsMode = 'dynamic';
        that.querybuilder.showIcons = true;
        that.querybuilder.value = [
            [
                ['customField', '<', 3],
                'or',
                ['id', '=', 3000]
            ],
            'and',
            [
                ['price', '<', 1300],
            ],
            'or',
            [
                ['produced', '>', new Date(2015, 3, 4)],
                'and',
                ['purchased', '>=', new Date(2019, 4, 23, 15, 33)]
            ]
        ];
        that.querybuilder.getDynamicField = function (field) {
            if (field === 'customField') {
                return { label: 'Custom Field', dataField: field, dataType: 'number', filterOperations: ['<', '>'] };
            }
            return { label: field, dataField: field.toLowerCase(), dataType: 'string', filterOperations: ['=', 'startswith', 'endswith'] };
        };

        that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');

        that.querybuilder.addEventListener('change', function () {
            that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');
        });
    }
}