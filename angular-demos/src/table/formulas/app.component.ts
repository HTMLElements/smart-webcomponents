import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	data: any[] = [
		{ A: 10, C: 1, D: 'Hello' },
		{ A: '=A1+1', C: 2, D: 'world' },
		{ A: '=A2+1', C: 3, D: '=D1&" "&D2&"!"' },
		{ C: '=SUM(C1:C3)' },
		{},
		{},
		{},
		{ F: '=8+2' },
		{ F: '=PI()' },
		{ A: 10, B: 20, C: 30, D: 11, E: 21, G: '=MAX(A10:E10)' }
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'A: string',
			'B: string',
			'C: string',
			'D: string',
			'E: string',
			'F: string',
			'G: string'
		]
	});

	editing: boolean = true;

	formulas: boolean = true;

	keyboardNavigation: boolean = true;

	columns: TableColumn[] = [
		{ label: 'A', dataField: 'A' },
		{ label: 'B', dataField: 'B' },
		{ label: 'C', dataField: 'C' },
		{ label: 'D', dataField: 'D' },
		{ label: 'E', dataField: 'E' },
		{ label: 'F', dataField: 'F' },
		{ label: 'G', dataField: 'G' }
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