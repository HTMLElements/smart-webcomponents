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
    {
      Year: '2020',
      USA: {
        Children: 40,
        Elderly: 20,
      },
      Germany: {
        Children: 30,
        Elderly: 20,
      },
      Japan: {
        Children: 20,
        Elderly: 40,
      },
    },
    {
      Year: '2021',
      USA: {
        Children: 45,
        Elderly: 15,
      },
      Germany: {
        Children: 25,
        Elderly: 20,
      },
      Japan: {
        Children: 20,
        Elderly: 50,
      },
    },
    {
      Year: '2022',
      USA: {
        Children: 50,
        Elderly: 10,
      },
      Germany: {
        Children: 20,
        Elderly: 20,
      },
      Japan: {
        Children: 10,
        Elderly: 60,
      },
    },
    {
      Year: '2023',
      USA: {
        Children: 55,
        Elderly: 5,
      },
      Germany: {
        Children: 15,
        Elderly: 20,
      },
      Japan: {
        Children: 10,
        Elderly: 70,
      },
    }
  ];

  caption = 'Population Changes of Children and Edlerly'

  description = '';

  showLegend = false;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Year',
  };

  valueAxis = {
    minValue: 0
  };

  gridOptions = {
    slotWidthZ: 20,
  };

  seriesGroups = [
    {
      type: 'stackedarea',
      dataField: 'Japan',
      displayText: 'Japan',
      series: [
        {
          dataField: 'Children',
          displayText: 'Children',
        },
        {
          dataField: 'Elderly',
          displayText: 'Elderly',
        },
      ],
    },
    {
      type: 'stackedarea',
      dataField: 'USA',
      displayText: 'USA',
      series: [
        {
          dataField: 'Children',
          displayText: 'Children',
        },
        {
          dataField: 'Elderly',
          displayText: 'Elderly',
        },
      ],
    },
    {
      type: 'stackedarea',
      dataField: 'Germany',
      displayText: 'Germany',
      series: [
        {
          dataField: 'Children',
          displayText: 'Children',
        },
        {
          dataField: 'Elderly',
          displayText: 'Elderly',
        },
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