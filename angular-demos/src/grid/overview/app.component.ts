import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {	
	@ViewChild("grid", { read: GridComponent, static: false }) grid!: GridComponent;

    ngAfterViewInit(): void {
		this.grid.dataSource = new Smart.DataAdapter (
		<DataAdapter>{
			dataSource: GetData(500),
			dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'productName: string',
					'quantity: number',
					'price: number',
					'total: number'
				]
		});
		
		this.grid.columns = 
			<GridColumn[]>[
			{
				label: 'First Name', dataField: 'firstName', columnGroup: 'name'
			},
			{ label: 'Last Name', dataField: 'lastName', columnGroup: 'name' },
			{ label: 'Product', dataField: 'productName', columnGroup: 'order'},
			{ label: 'Quantity', dataField: 'quantity', columnGroup: 'order'},
			{ label: 'Unit Price', dataField: 'price', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings: any) {
					const rowId = settings.row;
					const columnDataField = settings.column;
					const template = settings.template;
					
					if (settings.value >= 4) {
						settings.cell.background = '#00A45A';
						settings.cell.color = '#fff';
					}
					else if (settings.value < 2) 
					{
						settings.cell.background = '#DF3800';
						settings.cell.color = '#fff';
					}
					else {
						settings.cell.background = '#FFFDE1';
						settings.cell.color = '#333';				
					}
					
					settings.value = '$' + new Number(settings.value).toFixed(2);
				}
			},
			{ label: 'Total', dataField: 'total', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings: any) {
					const rowId = settings.row;
					const columnDataField = settings.column;
					const template = settings.template;
					
					if (settings.value >= 20) {
						settings.cell.background = '#00A45A';
						settings.cell.color = '#fff';
					}
					if (settings.value <= 5) {
						settings.cell.background = '#DF3800';
						settings.cell.color = '#fff';
					}
					else {
						settings.cell.background = '#FFFDE1';
						settings.cell.color = '#333';				
					}
					
					settings.value = '$' + new Number(settings.value).toFixed(2);
				}
			}
		];
			
			
		this.grid.behavior.columnResizeMode = 'growAndShrink';
		
		this.grid.appearance = {
			alternationCount: 2,
			showRowHeader: true,
			showRowHeaderSelectIcon: true,
			showRowHeaderFocusIcon: true
		};
		this.grid.paging.enabled = true;
		this.grid.pager.visible = true;
		this.grid.sorting.enabled = true;
		this.grid.editing.enabled = true;	
		this.grid.selection = {
			enabled: true,
			allowCellSelection: true,
			allowRowHeaderSelection: true,
			allowColumnHeaderSelection: true,
			mode: 'extended'
		};
		
		
		this.grid.columnGroups = [
		  { label: 'Customer Name', align: 'center', name: 'name' },
		  { label: 'Order Detals', align: 'center',  name: 'order' }
		]
    }
}
