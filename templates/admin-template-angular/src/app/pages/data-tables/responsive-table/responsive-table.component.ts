import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent {

  @ViewChild('responsiveTable', { read: TableComponent, static: false }) responsiveTable!: TableComponent;

  tableSettings = {
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

      this.responsiveTable.sortBy('lastName', 'asc');
      
    },
    paging: true,
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
