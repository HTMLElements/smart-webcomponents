import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	freezeHeader: boolean = true;

	keyboardNavigation: boolean = true;

	virtualization: boolean = true;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		const data: any[] = [],
			columns: TableColumn[] = [];

		for (let i = 65; i < 91; i++) {
			const letter: string = String.fromCharCode(i);

			columns.push({ label: letter, dataField: letter, width: 100 });
		}

		for (let i = 0; i < 10000; i++) {
			const dataPoint: any = {};

			for (let j = 65; j < 91; j++) {
				const letter: string = String.fromCharCode(j);
				dataPoint[String.fromCharCode(j)] = letter + i;
			}

			data.push(dataPoint);
		}

		this.table.dataSource = data;
		this.table.columns = columns;
	}
}