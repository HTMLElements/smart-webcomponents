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
    let sampleData = [];
    let startingDate = new Date('2022-01-01');
    for(let i = 0; i < 20; i++) {
      startingDate.setDate(startingDate.getDate() + 1);
      let fomrattedDate =  startingDate.getDate()+'/'+(startingDate.getMonth()+1);
      let obj = {
        Day: fomrattedDate,
        AMZN: Math.floor(Math.random() * 15) + 40,
        GOOG: Math.floor(Math.random() * 20) + 40,
        AAPL: Math.floor(Math.random() * 10) + 40,
      }
      sampleData.push(obj);
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Changes in January 2022'

  description = 'Generated with random data';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 25,
    y: 40,
    z: 70,
  };

  xAxis = {
    dataField: 'Day',
    gridLines: {
      visible: true,
    },
  };

  valueAxis = {
    unitInterval: 15,
    minValue: 0,
    maxValue: 100,
    formatFunction: (value:any) => {
      return parseFloat(value).toFixed(2) + '$';
    }
  };

  gridOptions = {
    slotWidthZ: 10,
    width: 120,
    height: 40
  };

  seriesGroups = [
    {
      type: 'stepline',

      series: [
        { dataField: 'GOOG', displayText: 'GOOG' },
        { dataField: 'AMZN', displayText: 'AMZN' },
        { dataField: 'AAPL', displayText: 'AAPL' },
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