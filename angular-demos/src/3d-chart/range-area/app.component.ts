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
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for(let i = 0; i < 12; i++) {
      let obj = {
        Month: months[i],
        AMZNTo: Math.floor(Math.random() * 15) + 30,
        AMZNFrom: Math.floor(Math.random() * 15) +25,
        GOOGTo: Math.floor(Math.random() * 20) + 80,
        GOOGFrom: Math.floor(Math.random() * 20) + 50,
        AAPLTo: Math.floor(Math.random() * 10) + 50,
        AAPLFrom: Math.floor(Math.random() * 15) + 30
      }
      sampleData.push(obj);
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Changes in January 2022'

  description = 'Generated with random data';

  showLegend = false;

  colorScheme = 'scheme05';

  cameraPosition = {
    x: 50,
    y: 40,
    z: 70,
  };

  xAxis = {
    dataField: 'Month',
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
    slotWidthZ: 17,
    width: 120,
    height: 60
  };

  seriesGroups = [
    {
      type: 'rangearea',

      series: [
        { dataFieldFrom: 'GOOGFrom', displayTextFrom: 'From', dataFieldTo: 'GOOGTo', displayTextTo: 'To', displayText: 'Google' },
        { dataFieldFrom: 'AAPLFrom', displayTextFrom: 'From', dataFieldTo: 'AAPLTo', displayTextTo: 'To', displayText: 'Apple' },
        { dataFieldFrom: 'AMZNFrom', displayTextFrom: 'From', dataFieldTo: 'AMZNTo', displayTextTo: 'To', displayText: 'Amazon' },
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