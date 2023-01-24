import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, Smart } from 'smart-webcomponents-angular/grid';
import { DropDownList } from 'smart-webcomponents-angular/dropdownlist';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

	data = [{ "Country": "Belgium", "City": "Brussels" }, { "Country": "France", "City": "Paris" }, { "Country": "USA", "City": "Washington" }, { "Country": "Lebanon", "City": "Beirut" }];
	cities: Record<string, string[]> = {
		Belgium: ["Bruges", "Brussels", "Ghent"],
		France: ["Bordeaux", "Lille", "Paris"],
		USA: ["Los Angeles", "Minneapolis", "Washington"],
		Lebanon: ["Beirut", "Sidon", "Byblos"]
	};
	change: boolean = false;

	dataSource = new Smart.DataAdapter(
		{
			dataSource: this.data,
			dataFields:
				[
					'Country: string',
					'City: string'
				]
		});

	editing = {
		enabled: true,
		mode: 'cell'
	};

	columns = [
		{
			label: 'Country', dataField: 'Country', editor: {
				template: '<smart-drop-down-list></smart-drop-down-list>',
				onInit: (row: number, column: string, editor: HTMLElement) => {
					const that = this,
						dropDownList = (editor.firstElementChild as DropDownList);

					dropDownList.dataSource = ['Belgium', 'France', 'USA', 'Lebanon'];
					dropDownList.dropDownAppendTo = 'body';
					dropDownList.selectedValues = [that.grid.rows![row].cells![0].value];

					dropDownList.addEventListener('change', function () {
						that.change = true;
					});
				},
				onRender: (row: number, column: string, editor: HTMLElement) => {
					(editor.firstElementChild as DropDownList).selectedValues = [this.grid.rows![row].cells![0].value];
				},
				getValue() {
					return ((this as any).firstElementChild as DropDownList).selectedValues![0];
				}
			}
		},
		{
			label: 'City', dataField: 'City', editor: {
				template: '<smart-drop-down-list></smart-drop-down-list>',
				onInit(row: number, column: string, editor: HTMLElement) {
					const dropDownList = (editor.firstElementChild as DropDownList);

					dropDownList.dropDownAppendTo = 'body';
					dropDownList.placeholder = 'Select a city...';
				},
				onRender: (row: number, column: string, editor: HTMLElement) => {
					const that = this,
						countryValue: string = that.grid.rows![row].cells![0].value,
						citiesSource: string[] = that.cities[countryValue],
						dropDownList = (editor.firstElementChild as DropDownList);

					dropDownList.dataSource = citiesSource;
					dropDownList.selectedValues = [that.grid.rows![row].cells![1].value];
				},
				getValue() {
					return ((this as any).firstElementChild as DropDownList).selectedValues![0] || 'Select a city...';
				}
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
		const that = this;

		that.grid.addEventListener('endEdit', function (event: CustomEvent) {
			const detail = event.detail;

			if (detail.column.dataField === 'Country' && that.change) {
				detail.row.cells[1].value = 'Select a city...';
			}

			that.change = false;
		});
	}
}