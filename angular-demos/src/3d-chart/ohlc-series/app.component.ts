import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

  dataSource = [
    { month: 'Jan', south: 500, west: 400, east: 1300, north: 1000 },
    { month: 'Feb', south: 1500, west: 800, east: 1600, north: 1000 },
    { month: 'Mar', south: 2000, west: 800, east: 1400, north: 900 },
    { month: 'Apr', south: 2500, west: 700, east: 1600, north: 1300 },
    { month: 'May', south: 3000, west: 900, east: 2300, north: 1400 },
  ];

  caption = 'Revenue by Month and Region'

  description = '';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'month',
  };

  gridOptions = {
    slotWidthZ: 8,
  };

  valueAxis = {
    unitInterval: 600,
    maxValue: 3000,
    minValue: 0,
    formatSettings: {
      prefix: '$',
    }
  };

  seriesGroups = [
    {
      type: 'line',

      series: [
        { dataField: 'south', displayText: 'South' },
        { dataField: 'west', displayText: 'West' },
        { dataField: 'east', displayText: 'East' },
        { dataField: 'north', displayText: 'North' },
      ],
    },
  ];
  
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