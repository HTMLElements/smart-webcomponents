import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, Smart, GridColumn } from 'smart-webcomponents-angular/grid';


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
	dataSource: './assets/beverages.json',
		dataFields: [
			{ name: 'name', dataType: 'string' },
			{ name: 'type', dataType: 'string' },
			{ name: 'calories',dataType: 'int' },
			{ name: 'totalfat', dataType: 'string' },
			{ name: 'protein', dataType: 'string' }
		],
	})
	
	columns: GridColumn[] = 
	[
	  { label: 'Name', dataField: 'name', width: 250 },
	  { label: 'Beverage Type', dataField: 'type', width: 250 },
	  { label: 'Calories', dataField: 'calories', width: 180 },
	  { label: 'Total Fat', dataField: 'totalfat', width: 120 },
	  { label: 'Protein', dataField: 'protein' }
	]
}