import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, Smart } from 'smart-webcomponents-angular/grid';


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
	
	appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	} 
	
	filtering = {
		enabled: true
	}
	
	sorting = {
		enabled: true
	}
	
	dataSource = new Smart.DataAdapter({
		dataSource: './assets/employees.csv',
		dataFields: [
			{ name: 'EmployeeKey', dataType: 'number' },
			{ name: 'ParentEmployeeKey', dataType: 'number' },
			{ name: 'FirstName', dataType: 'string' },
			{ name: 'LastName', dataType: 'string' },
			{ name: 'Title', dataType: 'string' },
			{ name: 'HireDate', dataType: 'date' },
			{ name: 'BirthDate', dataType: 'date' },
			{ name: 'Phone', dataType: 'string' },
			{ name: 'Gender', dataType: 'string' },
			{ name: 'DepartmentName', dataType: 'string' }
		]
	})

	columns: GridColumn[] = [
		  { label: 'FirstName', dataField: 'FirstName',  width: 200 },
		  { label: 'LastName',  dataField: 'LastName', width: 200 },
		  { label: 'Department Name', dataField: 'DepartmentName', width: 150 },
		  { label: 'Title', dataField: 'Title', width: 300 },
		  { label: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
		  { label: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
		  { label: 'Phone', dataField: 'Phone', width: 120 } 
	]
}