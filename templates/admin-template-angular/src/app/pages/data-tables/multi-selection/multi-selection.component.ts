import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss']
})
export class MultiSelectionComponent {

  @ViewChild('multiSelectionTable', { read: TableComponent, static: false }) multiSelectionTable!: TableComponent;

  multiSelectionTableSettings = {
    dataSource: new window.Smart.DataAdapter({
      dataSource: this.dataService.generateData(50),
      dataFields: [
        'id: number',
        'firstName: string',
        'lastName: string',
        'productName: string',
        'quantity: number',
        'price: number',
        'total: number'
      ]
    }),
    onInit: () => {

      this.multiSelectionTable.sortBy('lastName', 'asc');
      this.multiSelectionTable.select([3, 5, 11]);
      
    },
    paging: true,
    selection: true,
    sortMode: 'one',
    tooltip: true,
    columns: [
      { label: 'id', dataField: 'id', dataType: 'number' },
      { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
      { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
      { label: 'Product Name', dataField: 'productName', dataType: 'string' },
      { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
      { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
      { label: 'Total', dataField: 'total', dataType: 'number' }
    ]
  }

  constructor(private dataService: DataService) { }

}
