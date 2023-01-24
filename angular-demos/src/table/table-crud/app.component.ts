import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetCountriesData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
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
	});

	columns: String[] = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
    ];
    
    counter = 0;
    
	handleAdd(event: Event) {
		const table = this.table;

		this.counter++;

		table.dataSource.add({
			Country: "Bulgaria" + this.counter,
			Area: "100000",
			Population_Rural: "8000000",
			Population_Total: "8100000",
			GDP_TOTAL: "12321321"
		});
	}

	handleUpdate(event: Event) {
		const table = this.table;

		if (table.dataSource.length > 0) {
			this.counter++;
			table.dataSource.update(0, {
				Country: "Bulgaria" + this.counter,
				Area: "100000",
				Population_Rural: "8000000",
				Population_Total: "8100000",
				GDP_TOTAL: "12321321321"
			});
		}
	}

	handleRemove(event: Event) {
		const table = this.table;

		if (table.dataSource.length > 0) {
			table.dataSource.removeAt(table.dataSource.length - 1);
		}
	}
 
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