import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent, GridColumn } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('grid2', { read: GridComponent, static: false }) grid2!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		const grid = this.grid;
		const grid2 = this.grid2;

		grid.addEventListener('columnDragging', function (event: CustomEvent) {
			event.detail.data.data();
			event.detail.data.feedbackLine.style.display = 'none';
			event.detail.data.feedback.innerHTML = event.detail.column.label;
		});

		grid.addEventListener('columnDragEnd', function (event: CustomEvent) {
			const column = event.detail.column;
			const pointerEvent = event.detail.originalEvent;
			if (pointerEvent.pageY >= grid2.nativeElement.offsetTop && pointerEvent.pageY <= grid2.nativeElement.offsetTop + grid2.nativeElement.offsetHeight) {
				if (pointerEvent.pageX >= grid2.nativeElement.offsetLeft && pointerEvent.pageX <= grid2.nativeElement.offsetLeft + grid2.nativeElement.offsetWidth) {
					(grid.columns as GridColumn[]).splice((grid.columns as GridColumn[]).indexOf(column), 1);
					(grid2.columns as GridColumn[]).push({ label: column.label, dataField: column.dataField });
				}
			}
		});
	}

	behavior = { allowColumnReorder: true }

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(20),
		autoGenerateColumns: false,
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	columns = [
		{
			label: 'First Name', width: 150, dataField: 'firstName'
		},
		{ label: 'Last Name', width: 150, dataField: 'lastName' },
		{ label: 'Quantity', width: 100, dataField: 'quantity' },
		{ label: 'Product', dataField: 'productName', allowReorder: false },
		{ label: 'Unit Price', width: 100, dataField: 'price', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
	]

	columns2 = []
}