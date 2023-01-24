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
    { Browser: 'Samsung Internet', Share: 4.02},
    { Browser: 'Firefox', Share: 3.74},
  ];

  caption = 'Desktop browsers share'

  description = '(source: gs.statcounter.com)';

  showLegend = true;

  legendLayout = {
    flow: 'vertical',
  };

  colorScheme = 'scheme01';


  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          initialAngle: 40,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 2,
          formatFunction: function (value:any) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value) + '%';
          },
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