import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(100),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'date: date',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });
    selection = {
        enabled: true,
        allowCellSelection: true,
        allowRowHeaderSelection: true,
        allowColumnHeaderSelection: true,
        mode: 'extended'
    };
    editing = {
        enabled: true,
        mode: 'cell'
    };
    columns = [
		{
			label: 'First Name', dataField: 'firstName', template: 'dropDownList', editor: 'dropDownList'
		},
		{
			label: 'Last Name', dataField: 'lastName', template: 'dropDownList', editor: 'dropDownList'
		},
		{
			label: 'Product', allowEdit: true, width: 150, dataField: 'productName', template: 'tags', editor: {
				template: 'multiComboInput'
			}
		},
		{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
		{ label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' },
		{ label: 'Supplier', width: 150, dataField: 'custom', template: 'tags',
			editor: {
				template: 'multiComboInput',
				readonly: true,
				dropDownButtonPosition: 'right',
				autoOpen: true,
				pills: true,
				singleSelect: true,
				dataSource: [
					{ value: 0, color: '#8E24AA', label: 'Andrew', image: '../../images/people/andrew.png' },
					{ value: 1, color: '#41B883', label: 'Anne', image: '../../images/people/anne.png' },
					{ value: 2, color: '#53B9E6', label: 'Janet', image: '../../images/people/janet.png' },
					{ value: 3, color: '#FFCD42', label: 'John', image: '../../images/people/john.png' },
					{ value: 4, color: '#DD5347', label: 'Laura', image: '../../images/people/laura.png' }
				]
			}
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