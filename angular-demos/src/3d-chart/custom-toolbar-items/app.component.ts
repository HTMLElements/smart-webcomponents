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
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
    { Day: 'Sunday', Keith: 20, Erica: 45, George: 30 },
  ]

  caption = 'Fitness & exercise weekly scorecard'

  description = 'Time spent in vigorous exercise by 3 people';

  showLegend = true;

  colorScheme = 'scheme29';

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Day',
  };

  valueAxis = {
    unitInterval: 5,
    minValue: 0,
  };

  controlsToolbarItems = ['reset-camera', 'zoom-in', 'zoom-out', 'save-image', 'camera-control',
    {
      name: 'change-type', content: '<jqx-button>Change Type</jqx-button>',
      action: () => {
        let type = this.seriesGroups[0].type
        this.seriesGroups[0].type = type === 'column' ? 'line' : 'column';
        this.chart.refresh();
      }
    }
  ];

  seriesGroups = [
    {
      type: 'column',

      series: [
        { dataField: 'Keith', displayText: 'Keith' },
        { dataField: 'Erica', displayText: 'Erica' },
        { dataField: 'George', displayText: 'George' },
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