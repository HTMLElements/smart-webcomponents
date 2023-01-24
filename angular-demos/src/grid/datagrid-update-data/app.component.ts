import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('updateBtn', { read: ButtonComponent, static: false }) updateBtn!: ButtonComponent;
	@ViewChild('updateRowBtn', { read: ButtonComponent, static: false }) updateRowBtn!: ButtonComponent;
	@ViewChild('updateCellBtn', { read: ButtonComponent, static: false }) updateCellBtn!: ButtonComponent;
	@ViewChild('clearBtn', { read: ButtonComponent, static: false }) clearBtn!: ButtonComponent;
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	
   dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})
	
	columns: GridColumn[] = [
		{
			label: 'First Name', dataField: 'firstName', columnGroup: 'name'
		},
		{ label: 'Last Name', dataField: 'lastName', columnGroup: 'name' },
		{ label: 'Product', dataField: 'productName', columnGroup: 'order' },
		{ label: 'Quantity', dataField: 'quantity', columnGroup: 'order' },
		{ label: 'Unit Price', dataField: 'price', cellsFormat: 'c2', columnGroup: 'order'},
		{ label: 'Total', dataField: 'total', cellsFormat: 'c2', columnGroup: 'order' }
	]
		
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		const that = this;
		// afterViewInit code.
    	this.updateBtn.addEventListener('click', () => {
    		 that.grid.dataSource = new window.Smart.DataAdapter({
    			dataSource: GetData(500),
    			dataFields: [
    				'id: number',
    				'firstName: string',
    				'lastName: string',
    				'productName: string',
    				'quantity: number',
    				'price: number',
    				'total: number'
    			]
    		})
    	});
    
    	this.updateRowBtn.addEventListener('click', () => {
    		const data = GetData(1)[0];
    	
    		that.grid.dataSource.update(0, data);
    	});
    
    	this.updateCellBtn.addEventListener('click', () => {
    		that.grid.dataSource[0].firstName = "Johny";
    	});
    
    	this.clearBtn.addEventListener('click', () => {
    		that.grid.dataSource = null;
    	});
    }
}