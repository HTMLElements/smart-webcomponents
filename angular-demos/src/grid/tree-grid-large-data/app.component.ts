import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetOrdersData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new Smart.DataAdapter({
        dataSource: GetOrdersData(),
        id: 'id',
        keyDataField: 'id',
        parentDataField: 'parentid',
        dataFields: [
            'id: string',
            'name: string',
            'customer: string',
            'price: number',
            'date: date'
        ]
    })
    behavior = { columnResizeMode: 'growAndShrink' }
    columns = [
        { label: 'Order Name', dataField: "name", align: 'center', width: 200 },
        { label: 'Customer', dataField: "customer", align: 'center', width: 200 },
        { label: 'Price', dataField: "price", cellsFormat: "c2", align: 'center', cellsAlign: 'right', width: 80 },
        {
            label: 'Order Date', dataField: "date", align: 'center', cellsFormat: "dd-MMMM-yyyy hh:mm"
        }
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
    }
}