import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [{ a: 0.35, b: 14.5 }, { a: 1, b: 2.5 }, { a: 10, b: 0.2 }, { a: 100, b: 205 }, { a: 1, b: 100 }, { a: 5.11, b: 10.13 }, { a: 20.13, b: 10.13 }, { a: 600, b: 300 }];
    caption = 'Logarithmic Scale Axis Example';
    description = 'Sample logarithmic scale axis with base 2';
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    colorScheme = 'scheme29';
    xAxis = {
        dataField: ''
    };
    valueAxis = {
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        unitInterval: 1,
        title: { text: 'Value' },
        labels: {
            formatSettings: { decimalPlaces: 3 },
            horizontalAlignment: 'right'
        }
    };
    seriesGroups = [
        {
            type: 'column',
            series: [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B' }
            ]
        },
        {
            type: 'line',
            series: [
                { dataField: 'a', displayText: 'A2' },
                { dataField: 'b', displayText: 'B2' }
            ]
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