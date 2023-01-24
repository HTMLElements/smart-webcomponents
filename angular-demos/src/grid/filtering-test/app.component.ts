import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
   @ViewChild('grid', { read: GridComponent, static: false })
  grid: GridComponent;

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }

  filtering: {
    enabled: true
  };

  appearance = {
    showColumnGroupsInColumnPanel: true
  };

  header = {
    visible: true
  };

  dataSource = new Smart.DataAdapter({
    dataSource: GetData(1000),
    dataFields: [
      'id: number',
      'firstName: string',
      'lastName: string',
      'productName: string',
    ],
  });

  columns = [
    {
      label: '<First Name>',
      dataField: 'firstName',
      columnGroup: 'group1',
    },
    { label: 'Last Name', dataField: 'lastName', columnGroup: 'group1' },
    { label: 'Product', dataField: 'productName', columnGroup: 'group2' },
  ];

  columnGroup = [
    { name: 'group1', label: 'Name' },
    { name: 'group2', label: 'Product' },
  ];
}