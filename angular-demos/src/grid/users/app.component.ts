import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, Smart } from 'smart-webcomponents-angular/grid';
import { MultiComboInputComponent } from 'smart-webcomponents-angular/multicomboinput';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('multicomboinput', { read: MultiComboInputComponent, static: false }) multicomboinput!: MultiComboInputComponent;
	
	appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowStatus: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showColumnIcon: true,
		allowHover: true,
		showRowNumber: true
	}
	
	dataSource = new Smart.DataAdapter(
	{
		dataSource: GetData(1000),
		dataFields:
			[
				'id: number',
				'firstName: string',
				'lastName: string',
				'available: boolean',
				'date: date',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
	})
	
	sorting = {
		enabled: true,
		mode: 'many'
	}
	
	filtering = {
		enabled: true
	}
	
	editing = {
		enabled: true,
		addNewRow: {
			visible: true,
			displayMode: 'button'
		}
	}
	
	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}
	
	behavior = { allowColumnReorder: true, rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink' }
	
	header = {
		visible: true,
		buttons: ['columns', 'filter', 'sort', 'delete', 'search'],
		onInit(item) {
		}
	}
	
	rowDetail = {
		enabled: true,
		dialog: {
			enabled: true
		}
	}
	
	columnMenu = {
		dataSource: {
			columnMenuCustomizeType: {
				visible: true
			},
			columnMenuItemDelete: {
				visible: true
			}
		}
	} 
	
	columns = [
		{
			label: 'First Name', allowHide: false, showDescriptionButton: true, description: "First Name Column", validationRules: [{ type: 'required' }, { type: 'minLength', value: 2 }, { type: 'maxLength', value: 10 }], dataField: 'firstName', columnGroup: 'name'
		},
		{ label: 'Last Name', description: "Last Name Column", dataField: 'lastName', showDescriptionButton: true, columnGroup: 'name' },
		{ label: 'Product', width: 200, showDescriptionButton: true, dataField: 'productName', editor: 'dropDownList', template: 'list', columnGroup: 'order' },
		{ label: 'Date', width: 200, showDescriptionButton: true, cellsFormat: 'dd-MM-yyyy hh:mm', dataField: 'date', columnGroup: 'order', editor: {
			template: 'dateTimePicker',
			autoOpen: true,
			formatString: 'dd-MM-yyyy hh:mm',
			dropDownDisplayMode: 'auto'
		}
		},
		{ label: 'Available', width: 200, template: 'checkBox', showDescriptionButton: true, dataField: 'available', columnGroup: 'order' },
		{ label: 'Quantity', showDescriptionButton: true, dataField: 'quantity', allowNull: false, columnGroup: 'order' },
		{
			label: 'Unit Price', showDescriptionButton: true, dataField: 'price', cellsFormat: 'c2', columnGroup: 'order'
		},
		{
			label: 'Total', dataField: 'total', cellsFormat: 'c2', columnGroup: 'order'
		},
		{
			label: 'Created By', template: 'createdBy', allowEdit: false, dataField: 'createdBy', dataType: 'string'
		},
		{
			label: 'Modified By', template: 'modifiedBy', allowEdit: false, dataField: 'modifiedBy', dataType: 'string'
		}

	]
	
	columnGroups = [
	  { label: 'Customer Name', align: 'center', name: 'name' },
	  { label: 'Order Detals', align: 'center', name: 'order' }
	]
	
	currentUser = 0
	users = [
    		{ id: 0, color: '#8E24AA', name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
    		{ id: 1, color: '#41B883', name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
    		{ id: 2, color: '#53B9E6', name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
    		{ id: 3, color: '#FFCD42', name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
    		{ id: 4, color: '#DD5347', name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
	]
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
	
	change(event) {
		this.currentUser = event.detail.index;
	}
	
	inputData = [
    		{ value: 0, color: '#8E24AA', label: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
    		{ value: 1, color: '#41B883', label: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
    		{ value: 2, color: '#53B9E6', label: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
    		{ value: 3, color: '#FFCD42', label: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
    		{ value: 4, color: '#DD5347', label: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
	]		
}