import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { QueryBuilderComponent } from 'smart-webcomponents-angular/querybuilder';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('querybuilder', { read: QueryBuilderComponent, static: false }) querybuilder!: QueryBuilderComponent;
    @ViewChild('filterQueryValue', { read: ElementRef, static: false }) filterQueryValue!: ElementRef;

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
        that.querybuilder.customOperations = [
            { label: 'Matches /^\d{7}$/g', name: '/^\d{7}$/g', hideValue: true },
            {
                label: 'Is valid',
                name: 'isvalid',
                editorTemplate: function (fieldType, value, fieldData) {
                    const editor1 = document.createElement('smart-radio-button'), editor2 = document.createElement('smart-radio-button'), container = document.createElement('div');
                    editor1.innerHTML = 'Yes';
                    editor2.innerHTML = 'No';
                    container.className = 'container';
                    if (typeof value !== 'boolean') {
                        value = !!parseFloat(value);
                    }
                    editor1.checked = value;
                    editor2.checked = !value;
                    container.appendChild(editor1);
                    container.appendChild(editor2);
                    return container;
                },
                valueTemplate: function (editor, value) {
                    return value ? '<em>yes</em>' : '<em>no</em>';
                },
                handleValue: function (editor) {
                    const editors = editor.getElementsByTagName('smart-radio-button');
                    return Number(editors[0].checked);
                }
            }
        ];

        that.querybuilder.fields = [
            { label: 'Id', dataField: 'id', dataType: 'number', filterOperations: ['=', '<', '>', 'isvalid'] },
            { label: 'Product', dataField: 'productName', dataType: 'string' },
            { label: 'Product code', dataField: 'productCode', dataType: 'string', filterOperations: ['=', '/^\d{7}$/g'] },
            { label: 'Unit Price', dataField: 'price', dataType: 'number' },
            { label: 'Produced', dataField: 'produced', dataType: 'date', filterOperations: ['<', '>'] },
            { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' },
            { label: 'Available', dataField: 'available', dataType: 'boolean' }
        ];

        that.querybuilder.showIcons = true;

        that.querybuilder.value = [
            [
                ['productCode', '/^\d{7}$/g'],
                'or',
                ['id', 'isvalid', 1]
            ],
            'and',
            [
                ['available', '=', true],
                'and',
                ['price', '<', 1300],
            ],
            'or',
            [
                ['produced', '>', new Date(2015, 3, 4)],
                'and',
                ['purchased', '>=', new Date(2019, 4, 23, 15, 33)]
            ]
        ];

        that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');

        that.querybuilder.addEventListener('change', function () {
            that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');
        });
    }
}