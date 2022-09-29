import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-table-with-buttons',
  templateUrl: './table-with-buttons.component.html',
  styleUrls: ['./table-with-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableWithButtonsComponent {

  @ViewChild('tableWithButtons', { read: TableComponent, static: false }) tableWithButtons!: TableComponent;

  tableWithButtonsSettings = {
    dataSource: new window.Smart.DataAdapter({
      dataSource: this.dataService.generateData(50),
      dataFields: [
        'id: number',
        'firstName: string',
        'lastName: string',
        'productName: string',
        'quantity: number',
        'price: number'
      ]
    }),
    onInit: () => {

      this.tableWithButtons.sortBy('lastName', 'asc');

    },
    filtering: true,
    paging: true,
    sortMode: 'one',
    tooltip: true,
    columns: [
      { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
      { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
      { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
      { label: 'Product Name', dataField: 'productName', dataType: 'string' },
      { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
      { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
      {
        label: '', dataField: '', width: 155, formatFunction: function (settings: any) {
          settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
        }
      }
    ]
  }

  constructor(private dataService: DataService) { }

}
