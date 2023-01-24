import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'date: date',
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        mode: 'cell'
    }

    columns = [
        {
            label: 'Mood', dataField: '', editor: {
                template: '#moodEditorTemplate',
                onInit(index, dataField, editor) {
                    editor.addEventListener('click', function (event) {
                        editor.firstElementChild.value = event.target.innerHTML;
                    });
                }
            }, width: 70, align: 'left', template: '#moodTemplate',
        },
        {
            label: 'First Name', dataField: 'firstName', editor: '<input/>'
        },
        {
            label: 'Last Name', dataField: 'lastName', editor: '<input/>'
        },
        { label: 'Product', width: 200, dataField: 'productName', editor: '#template' },
        {
            label: 'Order Date', width: 200, dataField: 'date', editor: '<input type="date"/>'
        },
        { label: 'Quantity', dataField: 'quantity', editor: '<input type="range"/>' },
        { label: 'Unit Price', dataField: 'price', editor: '<input type="number"/>', cellsFormat: 'c2' }
    ]

    init(): void { }

}