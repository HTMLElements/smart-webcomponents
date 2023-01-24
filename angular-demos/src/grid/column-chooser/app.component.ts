import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart, GridComponent } from 'smart-webcomponents-angular/grid';
import { Menu, MenuComponent } from 'smart-webcomponents-angular/menu';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('menu', { read: MenuComponent, static: false }) menu2!: MenuComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
    }
		
    appearance = {
		showColumnLines: false,
		showColumnHeaderLines: false
	}
	
	selection = {
		enabled: true,
	}
	
	grouping = {
		enabled: true,
		groupIndent: 0,
		summaryRow: {
			visible: false
		}
	}
	
	onCommand = function (args) {
		if (args.name === 'commandColumnRowMenuCommand') {
			const row = args.details;
			const menu = document.getElementById('menu') as Menu;
			args.event.preventDefault();
			menu.setAttribute('data-row-id', row.id);
			menu.addEventListener('itemClick', (event: CustomEvent) => {
				const detail = event.detail;
				document.querySelector("#log").innerHTML = detail.label + ' is clicked';
			});
			menu.open(args.event.pageX - 150, args.event.pageY + 20);
			args.handled = true;
		}
	}
	
	editing = {
		enabled: true,
		action: 'none',
		commandColumn: {
			visible: true,
			dataSource: {
				commandColumnEdit: {
					visible: false
				},
				commandColumnDelete: {
					visible: false
				},
				commandColumnMenu: {
					visible: true
				},
				commandColumnRowMenu: {
					visible: true
				}
			}
		}
	}
	
	dataSource = new window.Smart.DataAdapter({
		dataSource:  [
			{ Name: 'Task 1', Status: 'Done', Column3: 'Item 1.3', Column4: 'Item 1.4', Column5: 'Item 1.5', Notification: false },
			{ Name: 'Task 2', Status: 'In Progress', Column3: 'Item 2.3', Column4: 'Item 2.4', Column5: 'Item 2.5', Notification: false },
			{ Name: 'Task 3', Status: 'Done', Column3: 'Item 3.3', Column4: 'Item 3.4', Column5: 'Item 3.5', Notification: true },
			{ Name: 'Task 4', Status: 'Done', Column3: 'Item 4.3', Column4: 'Item 4.4', Column5: 'Item 4.5', Notification: false },
			{ Name: 'Task 5', Status: 'Done', Column3: 'Item 5.3', Column4: 'Item 5.4', Column5: 'Item 5.5', Notification: false }
		],
		groupBy: [],
		dataFields: [
			'Name: string',
			'Status: string',
			'Column3: string',
			'Column4: string',
			'Column5: string',
			'Notification: bool'
		]
	})
	
	columns = [
		{ label: 'Name', dataField: 'Name', allowHide: false },
		{ label: 'Status', dataField: 'Status' },
		{ label: 'Column 3', dataField: 'Column3', allowGroup: false },
		{ label: 'Column 4', dataField: 'Column4', allowGroup: false },
		{ label: 'Column 5', dataField: 'Column5', allowGroup: false }
	]
}