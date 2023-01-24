import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

    generateData(){
      const data = [];
      for(let year = 2012; year <= 2022; year++) {
        for(let month = 1; month <= 12; month++) {
          data.push({
            Date: new Date(year, month, 1),
            target: Math.round(Math.random() * 50 + 100),
            actual: Math.round(Math.random() * 50 + 100),
          });
        }
      }
      return data;
    }

    dataSource = this.generateData();

    caption = 'Targeted vs Achieved Sales'

    description = 'For the period 2012-2022';

    showLegend = true;

    colorScheme = 'scheme05';

    cameraPosition = {
      x: 30,
      y: 30,
      z: 50,
    };

    xAxis = {
      dataField: 'Date',
      type: 'date',
      formatFunction: (value:any) => {
        return (value.getMonth() + 1) + '-' + value.getFullYear();
      },
      labels: {
        step: 2,
        angle: 10,
      }
    };

    valueAxis = {
      unitInterval: 20,
      minValue: 0,
      formatSettings: {
        sufix: 'K',
        prefix: '$',
        decimalalPlaces: 2,
      }
    };

    seriesGroups = [
      {
        type: 'area',

        series: [
          { dataField: 'target', displayText: 'Targeted' },
          { dataField: 'actual', displayText: 'Achieved' },
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