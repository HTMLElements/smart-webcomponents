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
      Planet: "Earth",
      Radius: 6371,
    },
    {
      Planet: "Moon",
      Radius: 1737,
    },
    {
      Planet: "Jupiter",
      Radius: 70000,
    },
    {
      Planet: "Neptune",
      Radius: 24600,
    },
    {
      Planet: "Sun",
      Radius: 696340,
    },
  ];

  caption = "Logarithmic Comparison of planetary objects in base 10";

  description = "Radius in kilometres";

  showLegend = false;

  colorScheme = "scheme32";

  cameraPosition = {
    x: 55,
    y: 25,
    z: 60,
  };

  xAxis = {
    dataField: "Planet",
  };

  valueAxis = {
    formatFunction: function (value:any) {
      return value.toFixed(2) + " km";
    },
    logarithmicScale: true,
    logarithmicScaleBase: 10,
  };

  gridOptions = {
    height: 60,
    dynamicWidth: false,
    slotWidthX: 90,
    slotWidthZ: 30,
  };

  seriesGroups = [
    {
      type: "bar",
      series: [
        {
          dataField: "Radius",
          displayText: "",
          formatSettings: {
            prefix: "Radius: ",
            suffix: " km",
            thousandsSeparator: ",",
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