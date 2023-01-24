import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

  dataSource1 = [
    { Browser: "Chrome", Share: 55 },
    { Browser: "Safari", Share: 30 },
    { Browser: "Firefox", Share: 10 },
    { Browser: "Other", Share: 5 },
  ];

  dataSource2 = [
    { Browser: "Chrome", Share: 20 },
    { Browser: "Safari", Share: 40 },
    { Browser: "Firefox", Share: 10 },
    { Browser: "Android", Share: 10 },
    { Browser: "Other", Share: 20 },
  ];

  caption = "Desktop browsers share";

  description = "(source: gs.statcounter.com)";

  showLegend = true;

  legendLayout = {
    flow: "vertical",
    left: 30,
  };

  selectMode = "one";

  colorScheme = "scheme01";

  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: "donut",
      showLabels: false,
      dataSource: this.dataSource1,
      series: [
        {
          dataField: "Share",
          displayText: "Browser",
          initialAngle: 0,
          radius: 8,
          centerOffset: 0,
          width: 3,
          height: 2,
          formatFunction: function (value:any) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value).toFixed(2) + "%";
          },
        },
      ],
    },
    {
      type: "donut",
      showLabels: false,
      dataSource: this.dataSource2,
      formatSettings: { sufix: " (mobile)" },
      series: [
        {
          dataField: "Sare",
          displayText: "Browser",
          initialAngle: 0,
          radius: 15,
          centerOffset: 0,
          width: 4,
          height: 2,
          formatFunction: function (value:any) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value).toFixed(2) + "%";
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