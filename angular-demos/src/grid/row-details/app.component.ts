import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetCountriesData } from '../../common/data';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

	appearance = {
		showRowHeaderNumber: true,
		allowRowDetailToggleAnimation: true
	}

	onRowInit = (index, row) => {
		if (index === 0) {
			row.showDetail = true;
		}
	}

	rowDetail = {
		enabled: true,
		visible: true,
		template: `
			<smart-tabs>
				<smart-tab-item label="Population">
					<table>
						<tr>
							<td><strong>Urban:</strong></td>
							<td>{{Population_Urban}}</td>
						</tr>
						<tr>
							<td><strong>Rural:</strong></td>
							<td>{{Population_Rural}}</td>
						</tr>
						<tr>
							<td><strong>Total:</strong></td>
							<td>{{Population_Total}}</td>
						</tr>
					</table>
				</smart-tab-item>
				<smart-tab-item label="GDP">
						<table>
						<tr>
							<td><strong>Agriculture:</strong></td>
							<td>{{GDP_Agriculture}}</td>
						</tr>
						<tr>
							<td><strong>Industry:</strong></td>
							<td>{{GDP_Industry}}</td>
						</tr>
						<tr>
							<td><strong>Services:</strong></td>
							<td>{{GDP_Services}}</td>
						</tr>
						<tr>
							<td><strong>Total:</strong></td>
							<td>{{GDP_Total}}</td>
						</tr>
					</table>
				</smart-tab-item>
			</smart-tabs>`
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	})

	columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
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