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
    { Day: 'Monday', LondonLow: 10, LondonHigh: 18, NewYorkLow: 8, NewYorkHigh: 15, BerlinLow: 5, BerlinHigh: 20 },
    { Day: 'Tuesday', LondonLow: 13, LondonHigh: 18, NewYorkLow: 6, NewYorkHigh: 15, BerlinLow: 9, BerlinHigh: 24 },
    { Day: 'Wednesday', LondonLow: 11, LondonHigh: 20, NewYorkLow: 8, NewYorkHigh: 15, BerlinLow: 12, BerlinHigh: 22 },
    { Day: 'Thursday', LondonLow: 12, LondonHigh: 18, NewYorkLow: 13, NewYorkHigh: 20, BerlinLow: 7, BerlinHigh: 20 },
    { Day: 'Friday', LondonLow: 18, LondonHigh: 21, NewYorkLow: 14, NewYorkHigh: 19, BerlinLow: 4, BerlinHigh: 20 },
    { Day: 'Saturday', LondonLow: 24, LondonHigh: 29, NewYorkLow: 10, NewYorkHigh: 15, BerlinLow: 10, BerlinHigh: 19 },
    { Day: 'Sunday', LondonLow: 11, LondonHigh: 20, NewYorkLow: 8, NewYorkHigh: 15, BerlinLow: 16, BerlinHigh: 28 }
  ];

  caption = 'Weather Forecast for Upcoming Week'

  description = 'Berlin, London, New York';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 30,
    y: 80,
    z: 70,
  };

  xAxis = {
    dataField: 'Month',
  };

  valueAxis = {
    unitInterval: 8,
    minValue: 0,
    maxValue: 40,
    formatFunction: (value:any) => {
      return value + '°C';
    }
  };

  gridOptions = {
    slotWidthZ: 17,
    width: 120,
    height: 60
  };

  seriesGroups = [
    {
      type: 'splinerangearea',

      series: [
        { dataFieldFrom: 'BerlinLow', displayTextFrom: 'Low', dataFieldTo: 'BerlinHigh', displayTextTo: 'High', displayText: 'Berlin' },
        { dataFieldFrom: 'LondonLow', displayTextFrom: 'Low', dataFieldTo: 'LondonHigh', displayTextTo: 'High', displayText: 'London' },
        { dataFieldFrom: 'NewYorkLow', displayTextFrom: 'Low', dataFieldTo: 'NewYorkHigh', displayTextTo: 'High', displayText: 'New York' },
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