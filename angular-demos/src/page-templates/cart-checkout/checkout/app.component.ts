import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';
import { GridComponent, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {


    layout: object = {
        rowHeight: 50
    };

    dataSource: DataAdapter = new Smart.DataAdapter(
        {
            dataSource: [
                {
                    title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
                    price: 24.99,
                    quantity: 1,
                },
                {
                    title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
                    price: 14.95,
                    quantity: 1,
                },
                {
                    title: '3DR - Solo Smart Rechargeable Battery - Black',
                    price: 149.95,
                    quantity: 2,
                },
                {
                    title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
                    price: 39.99,
                    quantity: 3,
                },
                {
                    title: '<b>Total</b>',
                    price: 459.81,
                    quantity: 0,
                },

            ],
            dataFields:
                [
                    'title: string',
                    'price: string',
                    'quantity: string',
                ]
        });

    columns: Array<object> = [
        {
            label: 'Product', dataField: 'title', width: '70%',
            formatFunction(settings: any) {
                settings.template = settings.row.data.title + (settings.row.data.quantity > 0 ? ' x ' + settings.row.data.quantity : '');
            }
        },
        {
            label: 'Total', dataField: 'quantity', width: '30%', cellsAlign: 'right', align: 'right',
            formatFunction(settings: any) {
                settings.template = (settings.row.data.quantity > 0 ? '$' + (parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity)) : '<b>$' + settings.row.data.price + '</b>');
            }
        },
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