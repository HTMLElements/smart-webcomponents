import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {

  commonSettings = {
    dataSource: new window.Smart.DataAdapter({
      dataSource: this.dataService.generateData(5),
      dataFields: [
        'firstName: string',
        'lastName: string',
        'quantity: number',
        'date: date'
      ]
    }),
    tooltip: true,
    columns: [
      { label: 'First Name', dataField: 'firstName', dataType: 'string' },
      { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
      { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
      { label: 'Date', dataField: 'date', dataType: 'date' },
      {
        label: 'Action', dataField: 'action', formatFunction: function (settings: any) {
          settings.template = '<div class="actions-container"><span class="material-icons">edit</span><span class="material-icons">delete_forever</span></div>';
        }
      }
    ]
  };

  weeklyData = [
    { market: 'Direct', revenue: 2873, value: 11 },
    { market: 'Partner', revenue: 7201, value: -9 },
    { market: 'Online', revenue: 1254, value: 27 },
    { market: 'Other', revenue: 901, value: 0.2 }
  ];

  clientsData = [
    { image: 'avril', name: 'Marcia Gomez', company: 'Sandy Lake', email: 'marcia.gomez@example.com', status: 'Active' },
    { image: 'andrew', name: 'Marvin George', company: 'Saddle Dr', email: 'marvin.george@example.com', status: 'Finished' },
    { image: 'johanna', name: 'Carole Pearson', company: 'Dane Ent.', email: 'carole.pearson@example.com', status: 'Inactive' },
    { image: 'johnny', name: 'Leroy Shelton', company: 'Lakeview', email: 'leroy.shelton@example.com', status: 'Active' },
    { image: 'maria', name: 'Daisy Murphy', company: 'Saddle Dr', email: 'daisy.murphy@example.com', status: 'Active' }
  ];

  condensedTableSetting = {
    dataSource: this.weeklyData,
    columns: [
      {
        label: 'Market', dataField: 'market', dataType: 'string', formatFunction(settings: any) {
          settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
        }
      },
      {
        label: 'Revenue', dataField: 'revenue', dataType: 'number', formatFunction(settings: any) {
          settings.template = `$ ${settings.value}`;
        }
      },
      {
        label: 'Value', dataField: 'value', dataType: 'number', formatFunction(settings: any) {
          settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

          settings.template = settings.value + '%';
        }
      }
    ]
  }

  hoverableTableSettings = {
    dataSource: this.clientsData,
    tooltip: true,
    columns: [
      {
        label: '', dataField: 'image', dataType: 'string', width: 50, formatFunction(settings: any) {
          settings.template = `<div class="img-as-background rounded-circle square border"><img src="../../../assets/images/phonebook/${settings.value}.png" /></div>`;
        }
      },
      { label: 'Name', dataField: 'name', dataType: 'string', width: 120 },
      { label: 'Company', dataField: 'company', dataType: 'string' },
      { label: 'Email', dataField: 'email', dataType: 'string', width: 220 }
    ]
  }

  spreadsheetData: any = [];

  spreadsheetColumns: any = [{
    label: '',
    dataField: 'rowHeader',
    width: 50,
    freeze: 'near',
    formatFunction(settings: any) {
      settings.cell.removeAttribute('data-field');
      settings.cell.setAttribute('row-header', '');
    }
  }];

  spreadSheetTableSettings: any = {
    dataSource: this.spreadsheetData,
    freezeHeader: true,
    keyboardNavigation: true,
    columns: this.spreadsheetColumns
  }
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

    for (let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i);
      this.spreadsheetColumns.push({ label: letter, dataField: letter, width: 100 });
    }

    for (let i = 0; i < 20; i++) {
      const dataPoint: any = { rowHeader: i + 1 };

      for (let j = 65; j < 91; j++) {
        dataPoint[String.fromCharCode(j)] = String.fromCharCode(j) + (i + 1);
      }

      this.spreadsheetData.push(dataPoint);
    }

  }
}
