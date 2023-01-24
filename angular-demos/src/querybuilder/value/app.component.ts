import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
        that.querybuilder.fields = [
            { label: 'Id', dataField: 'id', dataType: 'number' },
            { label: 'Product', dataField: 'productName', dataType: 'string' },
            { label: 'Unit Price', dataField: 'price', dataType: 'number' },
            { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' },
            { label: 'Available', dataField: 'available', dataType: 'boolean' }
        ];
        that.querybuilder.showIcons = true;
        that.querybuilder.value = [
            [
                ['purchased', '=', new Date(2019, 0, 4)],
                'and',
                ['productName', '<>', 'Monitors'],
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
                ['productName', '=', 'Televisions'],
                'and',
                ['price', '<', 4000]
            ]
        ];

        that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');

        that.querybuilder.addEventListener('change', function () {
            that.filterQueryValue.nativeElement.innerHTML = JSON.stringify(that.querybuilder.value, null, '\t');
        });
        that.checkbox.addEventListener('change', function (event: any) {
            that.querybuilder.allowDrag = event.detail.value;
        });
        that.checkbox2.addEventListener('change', function (event: any) {
            that.querybuilder.showIcons = event.detail.value;
        });
    }
}