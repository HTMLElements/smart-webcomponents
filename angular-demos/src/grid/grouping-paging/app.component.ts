import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(100),
        groupBy: ['productName'],
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });
    pager = {
        visible: true
    };
    paging = {
        enabled: true,
        pageSize: 2
    };
    filtering = {
        enabled: false
    };
    sorting = {
        enabled: false
    };
    behavior = {
        allowColumnReorder: true
    };
    grouping = {
        enabled: true,
        renderMode: 'basic',
        groupBar: {
            visible: true
        }
    };
    onAfterInit = () => {
        this.grid.getVisibleRows().then(function (rows) {
            rows[0].expand();
        });
    };
    columns = [
        {
            label: '#', width: 200, dataField: 'id'
        },
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
        { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        {
            label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2'
        }
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