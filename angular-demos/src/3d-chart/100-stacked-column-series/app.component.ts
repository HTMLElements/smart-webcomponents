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
          Day: 'Monday',
          Keith: {
            Running: 10,
            Swimming: 20,
            Cycling: 30,
          },
          Erica: {
            Running: 13,
            Swimming: 30,
            Cycling: 23,
          },
          George: {
            Running: 15,
            Swimming: 70,
            Cycling: 10,
          },
        },
        {
          Day: 'Tuesday',
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 10,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 35,
            Swimming: 15,
            Cycling: 40,
          },
        },
        {
          Day: 'Wednesday',
          Keith: {
            Running: 55,
            Swimming: 15,
            Cycling: 10,
          },
          Erica: {
            Running: 15,
            Swimming: 60,
            Cycling: 5,
          },
          George: {
            Running: 50,
            Swimming: 5,
            Cycling: 10,
          },
        },
        {
          Day: 'Thursday',
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 15,
            Swimming: 15,
            Cycling: 5,
          },
        },
        {
          Day: 'Friday',
          Keith: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          Erica: {
            Running: 15,
            Swimming: 15,
            Cycling: 40,
          },
          George: {
            Running: 5,
            Swimming: 5,
            Cycling: 40,
          },
        },
    ];

    caption = "Fitness & exercise weekly scorecard"

    description = "Time spent in vigorous exercise by 3 people";

    colorScheme = "scheme05";
    xAxis = {
        dataField: "Day",
    };
    valueAxis = {
        formatSettings: {
            sufix: " %",
        }
    };
    gridOptions = {
        slotWidthZ: 19,
        height: 30
    }
    seriesGroups = [
        {
            type: "stackedcolumn100",
            dataField: "Keith",
            displayText: "Keith",
            series: [
                {
                    dataField: "Running",
                    displayText: "Running",
                },
                {
                    dataField: "Cycling",
                    displayText: "Cycling",
                },
                {
                    dataField: "Swimming",
                    displayText: "Swimming",
                },
            ],
        },
        {
            type: "stackedcolumn100",
            dataField: "Erica",
            displayText: "Erica",
            series: [
                {
                    dataField: "Running",
                    displayText: "Running",
                },
                {
                    dataField: "Cycling",
                    displayText: "Cycling",
                },
                {
                    dataField: "Swimming",
                    displayText: "Swimming",
                },
            ],
        },
        {
            type: "stackedcolumn100",
            dataField: "George",
            displayText: "George",
            series: [
                {
                    dataField: "Running",
                    displayText: "Running",
                },
                {
                    dataField: "Cycling",
                    displayText: "Cycling",
                },
                {
                    dataField: "Swimming",
                    displayText: "Swimming",
                },
            ],
        }
    ]

    cameraPosition = {
        x: 15,
        y: 30,
        z: 70,
    };

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