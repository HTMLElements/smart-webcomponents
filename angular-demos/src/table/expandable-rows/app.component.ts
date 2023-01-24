import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	chemicalElementsData: Object[] = [{
		number: 1,
		name: 'Hydrogen',
		symbol: 'H',
		weight: 1.008,
		abundance: 1400,
		originOfName: 'Greek elements hydro- and -gen, \'water-forming\''
	},
	{
		number: 2,
		name: 'Helium',
		symbol: 'He',
		weight: 4.002602,
		abundance: 0.008,
		originOfName: 'Greek hḗlios, \'sun\''
	},
	{
		number: 3,
		name: 'Lithium',
		symbol: 'Li',
		weight: 6.94,
		abundance: 20,
		originOfName: 'Greek líthos, \'stone\''
	},
	{
		number: 4,
		name: 'Beryllium',
		symbol: 'Be',
		weight: 9.0121831,
		abundance: 2.8,
		originOfName: 'Beryl, a mineral (ultimately from the name of Belur in southern India)'
	},
	{
		number: 5,
		name: 'Boron',
		symbol: 'B',
		weight: 10.81,
		abundance: 10,
		originOfName: 'Borax, a mineral (from Arabic bawraq)'
	},
	{
		number: 6,
		name: 'Carbon',
		symbol: 'C',
		weight: 12.011,
		abundance: 200,
		originOfName: 'Latin carbo, \'coal\''
	},
	{
		number: 7,
		name: 'Nitrogen',
		symbol: 'N',
		weight: 14.007,
		abundance: 19,
		originOfName: 'Greek nítron and -gen, \'niter-forming\''
	},
	{
		number: 8,
		name: 'Oxygen',
		symbol: 'O',
		weight: 15.999,
		abundance: 461000,
		originOfName: 'Greek oxy- and -gen, \'acid-forming\''
	},
	{
		number: 9,
		name: 'Fluorine',
		symbol: 'F',
		weight: 18.998403163,
		abundance: 585,
		originOfName: 'Latin fluere, \'to flow\''
	},
	{
		number: 10,
		name: 'Neon',
		symbol: 'Ne',
		weight: 20.1797,
		abundance: 0.005,
		originOfName: 'Greek néon, \'new\''
	}
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.chemicalElementsData,
		dataFields: [
			'number: number',
			'name: string',
			'symbol: string',
			'weight: number',
			'abundance: number',
			'originOfName: string'
		]
	});

	keyboardNavigation: Boolean = true;

	rowDetailTemplate: String = `<div class="element-cell">
		<div class="element-no">{{number}}</div>
		<div class="element-symbol">{{symbol}}</div>
		<div class="element-name">{{name}}</div>
		<div class="element-weight">{{weight}}</div>
	</div>
	<div><strong>Origin of name:</strong> {{originOfName}}</div>`;

	columns: TableColumn[] = [{
		label: 'No.',
		dataField: 'number',
		dataType: 'number',
		width: 50
	},
	{
		label: 'Name',
		dataField: 'name',
		dataType: 'string',
		width: 200
	},
	{
		label: 'Symbol',
		dataField: 'symbol',
		dataType: 'string',
		width: 150
	},
	{
		label: 'Weight',
		dataField: 'weight',
		dataType: 'number',
		width: 200,
		formatFunction(settings) {
			settings.template = settings.value.toFixed(2);
		}
	},
	{
		label: 'Abundance',
		dataField: 'abundance',
		dataType: 'number',
		width: 200,
		formatFunction(settings) {
			settings.template = settings.value + ' mg/kg';
		}
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