import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, Smart } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	
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
		dataSource: './assets/homeprices.tsv',
		dataFields: [
			{ name: 'Year', dataType: 'int' },
			{ name: 'HPI', dataType: 'float' },
			{ name: 'BuildCost', dataType: 'float' },
			{ name: 'Population', dataType: 'float' },
			{ name: 'Rate', dataType: 'float' }
		],
	})
	
	columns: GridColumn[] =
	[
		  { label: 'Year', dataField: 'Year', width: 200},
		  { label: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
		  { label: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
		  { label: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
		  { label: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
	]
				
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}		
}