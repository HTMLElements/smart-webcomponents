import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-column-search',
  templateUrl: './column-search.component.html',
  styleUrls: ['./column-search.component.scss']
})
export class ColumnSearchComponent {

  @ViewChild('columnSearchTable', { read: TableComponent, static: false }) columnSearchTable!: TableComponent;

  columnSearchTableSettings: any = {
    dataSource: new window.Smart.DataAdapter({
      dataSource: this.dataService.generateData(50),
      dataFields: [
        'id: number',
        'firstName: string',
        'lastName: string',
        'productName: string',
        'quantity: number',
        'price: number',
        'total: number',
      ]
    }),
    onInit: () => {

      this.columnSearchTable.sortBy('lastName', 'asc');

    },
    filtering: true,
    filterRow: true,
    paging: true,
    sortMode: 'one',
    tooltip: true,
    columns: [
      { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
      { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
      { label: 'Product Name', dataField: 'productName', dataType: 'string', responsivePriority: 4 },
      { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 5 },
      { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 5 },
      { label: 'Total', dataField: 'total', dataType: 'number' }
    ]
  }

  constructor(private dataService: DataService) {}
  
}
