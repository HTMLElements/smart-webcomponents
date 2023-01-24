﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

    dataSource = [
      { Month: 'Q1 2021', AAPL: 0.5, AMZN: 0.6 },
      { Month: 'Q2 2021', AAPL: 0.9, AMZN: -0.2 },
      { Month: 'Q3 2021', AAPL: -0.4, AMZN: -0.5 },
      { Month: 'Q4 2021', AAPL: 0.6, AMZN: 0.2 },
      { Month: 'Q1 2022', AAPL: 0.1, AMZN: 0.4 },
      { Month: 'Q2 2022', AAPL: -0.2, AMZN: 0.1 },
    ];
  
    caption = 'Stock Changes in Financial Quaters'
  
    description = '';
  
    showLegend = false;
  
    colorScheme = 'scheme01';
  
    cameraPosition = {
      x: 30,
      y: 40,
      z: 70,
    };
  
    xAxis = {
      dataField: 'Month',
    };
  
    valueAxis = {
      unitInterval: 0.20,
      minValue: -1,
      maxValue: 1,
      baselineValue: 0,
      formatSettings: {
        sufix: '%',
        decimalPlaces: 2,
      }
    };
  
    gridOptions = {
      slotWidthZ: 17,
      width: 100,
      height: 60
    };
  
    seriesGroups = [
      {
        type: 'column',
  
        series: [
          { dataField: 'AAPL', displayText: 'AAPL' },
          { dataField: 'AMZN', displayText: 'AMZN' },
        ],
        colorFunction: function (value:any) {
          return (value < 0) ? '#E25848' : '#61D14F';
        }
        
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