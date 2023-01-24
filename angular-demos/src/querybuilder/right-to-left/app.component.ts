import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { QueryBuilderComponent } from 'smart-webcomponents-angular/querybuilder';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('querybuilder', { read: QueryBuilderComponent, static: false }) querybuilder: QueryBuilderComponent;


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
            { label: 'מזהה', dataField: 'id', dataType: 'number' },
            { label: 'מוצר', dataField: 'productName', dataType: 'string' },
            { label: 'מחיר ליחידה', dataField: 'price', dataType: 'number' },
            { label: 'נקנה', dataField: 'purchased', dataType: 'datetime' },
            { label: 'זמין', dataField: 'available', dataType: 'boolean' }
        ];
        that.querybuilder.showIcons = true;
        that.querybuilder.value = [
            [
                ['purchased', '=', new Date(2019, 0, 4)],
                'and',
                ['productName', '<>', 'צגים'],
                'or',
                ['productName', 'isblank']
            ],
            'and',
            [
                ['available', '=', true],
                'and',
                ['price', '<', 1300],
            ],
            'or',
            [
                ['productName', '=', 'טלוויזיות'],
                'and',
                ['price', '<', 4000]
            ]
        ];
        that.querybuilder.messages = {
            'he': {
                'add': 'הוסף',
                'addCondition': 'הוסף תנאי',
                'addGroup': 'הוסף קבוצה',
                'and': 'ו',
                'notand': 'לא וגם',
                'or': 'או',
                'notor': 'לא אור',
                '=': 'שווים',
                '<>': 'לא שווה',
                '>': 'גדול מ',
                '>=': 'גדול מ או שווה ל',
                '<': 'פחות מ',
                '<=': 'פחות מ או שווה ל',
                'startswith': 'מתחיל עם',
                'endswith': 'נגמר עם',
                'contains': 'מכיל',
                'notcontains': 'לא מכיל',
                'isblank': 'ריק',
                'isnotblank': 'אינו ריק',
                'dateTabLabel': 'תאריך',
                'timeTabLabel': 'זמן',
                'queryLabel': 'שאילתא'
            }
        };

        that.checkbox.addEventListener('change', function (event: any) {
            that.querybuilder.allowDrag = event.detail.value;
        });
        that.checkbox2.addEventListener('change', function (event: any) {
            that.querybuilder.showIcons = event.detail.value;
        });
    }
}