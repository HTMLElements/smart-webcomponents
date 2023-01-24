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
      { Year: '2008', Japan: 89.1, USA: 80.44, UK: 80.76, China: 46.54, Bulgaria: 71.62, India: 30.25 },
      { Year: '2009', Japan: 89.99, USA: 80.61, UK: 81.03, China: 47.88, Bulgaria: 71.96, India: 30.59 },
      { Year: '2010', Japan: 90.81, USA: 80.77, UK: 81.3, China: 49.23, Bulgaria: 72.3, India: 30.93 },
      { Year: '2011', Japan: 91.07, USA: 80.94, UK: 81.57, China: 50.51, Bulgaria: 72.64, India: 31.28 },
      { Year: '2012', Japan: 91.15, USA: 81.12, UK: 81.84, China: 51.76, Bulgaria: 72.97, India: 31.63 },
      { Year: '2013', Japan: 91.23, USA: 81.3, UK: 82.1, China: 53.01, Bulgaria: 73.31, India: 32 },
      { Year: '2014', Japan: 91.3, USA: 81.48, UK: 82.36, China: 54.26, Bulgaria: 73.65, India: 32.38 },
      { Year: '2015', Japan: 91.38, USA: 81.67, UK: 82.63, China: 55.5, Bulgaria: 73.99, India: 32.78 },
      { Year: '2016', Japan: 91.46, USA: 81.86, UK: 82.89, China: 56.74, Bulgaria: 74.33, India: 33.18 },
      { Year: '2017', Japan: 91.54, USA: 82.06, UK: 83.14, China: 57.96, Bulgaria: 74.67, India: 33.6 },
      { Year: '2018', Japan: 91.62, USA: 82.26, UK: 83.4, China: 59.15, Bulgaria: 75.01, India: 34.03 },
      { Year: '2019', Japan: 91.7, USA: 82.46, UK: 83.65, China: 60.31, Bulgaria: 75.35, India: 34.47 },
      { Year: '2020', Japan: 91.78, USA: 82.66, UK: 83.9, China: 61.43, Bulgaria: 75.69, India: 34.93 }
    ];

    caption = 'Percentage of population living in urban areas'

    description = 'Change since 2008';

    showLegend = true;

    colorScheme = 'scheme32';

    cameraPosition = {
      x: 40,
      y: 20,
      z: 55,
    };

    xAxis = {
      dataField: 'Year',
    };

    valueAxis = {
      unitInterval: 10,
      maxValue: 100,
      minValue: 40,
      formatSettings: {
        sufix: '%',
      }
    };

    seriesGroups = [
      {
        type: 'bar',
        series: [
          { dataField: 'Japan', displayText: 'Japan' },
          { dataField: 'USA', displayText: 'USA' },
          { dataField: 'China', displayText: 'China' },

        ],
      }
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