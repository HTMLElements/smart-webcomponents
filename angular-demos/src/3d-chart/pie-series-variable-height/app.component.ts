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
    { Browser: 'Chrome', Share: 48.13 },
    { Browser: 'Safari', Share: 32.21 },
    { Browser: 'Edge', Share: 7.79 },
    { Browser: 'Samsung Internet', Share: 14.02 },
  ];

  caption = 'Desktop browsers share'

  description = '';

  showLegend = true;

  legendLayout = {
    left: 10,
    flow: 'vertical',
  };

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 10,
    y: 15,
    z: 35,
  };

  seriesGroups = [
    {
      type: 'pyramid',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          width: 40,
          height: 30,
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