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
      { Year: '2017', Germany: 44.652, France: 38.781, UK: 40.857 },
      { Year: '2018', Germany: 47.973, France: 41.592, UK: 43.647 },
      { Year: '2019', Germany: 46.794, France: 40.578, UK: 43.070 },
      { Year: '2020', Germany: 46.252, France: 39.037, UK: 41.098 },
      { Year: '2021', Germany: 50.801, France: 43.518, UK: 47.334 },
    ];

    autoRotate = true;

    autoRotateSpeed = 5;

    caption = 'GDP Per Capita Comparison'

    description = 'Comparison of Germany, France and United Kingdom in thousands';

    showLegend = false;

    colorScheme = 'scheme32';

    cameraPosition = {
      x: 10,
      y: 35,
      z: 70,
    };

    xAxis = {
      dataField: 'Year',
    };

    valueAxis = {
      unitInterval: 8,
      minValue: 0,
      formatSettings: {
        prefix: '$',
        sufix: 'K',
        decimalPlaces: 0,
      }
    };

    seriesGroups = [
      {
        type: 'column',

        series: [
          
          { dataField: 'Germany', displayText: 'Germany' },
          { dataField: 'UK', displayText: 'United Kingdom'},
          { dataField: 'France', displayText: 'France' },
        ],
      },
    ];

    stopRotate(){
      this.autoRotate = false;
    }

    setCameraPos(){
      this.chart.setCameraPosition(40, 30, 70);
    }

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