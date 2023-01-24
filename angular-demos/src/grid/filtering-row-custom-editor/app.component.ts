import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart, GridComponent } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}

	sorting = {
		enabled: true,
		mode: 'one'
	}

	filtering = {
		enabled: true,
		filterRow: {
			visible: true
		}
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number',
			'available: boolean'
		]
	})
	columns = [
		{
			label: 'First Name', dataField: 'firstName', filterEditor: {
				placeholder: 'Enter First Name',
				condition: 'CONTAINS'
			}
		},
		{
			label: 'Last Name', dataField: 'lastName', filterEditor: {
				placeholder: 'Enter Last Name',
				condition: 'STARTS_WITH'
			}
		},
		{
			label: 'Product', dataField: 'productName', filterEditor: {
				template: '<smart-input drop-down-button-position="right" placeholder="Enter Product" style="border-radius: 0px; border: none; width: 100%; height:100%"></smart-input',
				onInit(column, editor) {
					const input = editor.querySelector('smart-input');
					const productNames = [
						'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
					];
					input.dataSource = productNames;
					input.style.setProperty('--smart-background', 'transparent');
					input.onkeyup = (event) => {
						if (event.key === 'a' && event.ctrlKey) {
							input.select();
						}
					};
					input.addEventListener('change', () => {
						if (input.value === '') {
							column.filter = '';
						}
						else {
							column.filter = 'equal "' + input.value.trim() + '"';
						}
					});
				}
			}
		},
		{
			label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', filterEditor: {
				template: '<input style="background: transparent; border: none; outline: none; width: 100%; height:100%;" type="number"/>',
				onInit(column, editor) {
					const input = editor.querySelector('input');
					input.addEventListener('change', () => {
						if (!input.value) {
							column.filter = '';
						}
						else {
							column.filter = '>= ' + input.value;
						}
					});
				}
			}
		},
		{
			label: 'Delivery Date', dataField: 'date', align: 'right', cellsAlign: 'right', cellsFormat: 'd', filterEditor: {
				template: '<input style="background: transparent; border: none; outline: none; width: 100%; height:100%;" type="date"/>',
				onInit(column, editor) {
					const input = editor.querySelector('input');
					input.addEventListener('blur', () => {
						if (input.value === '') {
							column.filter = '';
						}
					});
					input.addEventListener('change', () => {
						column.filter = '>= ' + input.value;
					});
				}
			}
		},
		{
			label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', filterEditor: {
				template: '<input max=5 min=1 value=1 style="background: transparent; border: none; outline: none; margin-left:5%; width: 90%; height:25px;" type="range"/>',
				onInit(column, editor) {
					const input = editor.querySelector('input');
					editor.addEventListener('change', () => {
						if (parseInt(input.value) === 1) {
							column.filter = '';
						}
						else {
							column.filter = '>= ' + input.value;
						}
					});
				}
			}
		},
		{ label: 'Available', dataField: 'available', align: 'center', cellsAlign: 'center' }
	]
}