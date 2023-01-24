import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    animation = 'none';
    caption = 'Large set of data points';
    description = '';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    colorScheme = 'scheme32';
    xAxis = {
        dataField: 'x',
        valuesOnTicks: false
    };
    valueAxis = {
        unitInterval: 10,
        title: { text: 'Sales ($)<br>' },
        labels: {
            formatSettings: { prefix: '$', thousandsSeparator: ',' },
            horizontalAlignment: 'right'
        }
    };
    seriesGroups = [
        {
            type: 'scatter',
            series: [
                { dataField: 'y', symbolSize: 0.1, symbolType: 'circle', displayText: 'Sales in Q1' }
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
        const that = this;

        const sampleData = [];
        for (let i = 0; i < 25000; i++) {
            sampleData.push({
                x: Math.pow(Math.random(), 3) * 50,
                y: Math.pow(Math.random(), 3) * 70
            });
        }

        this.chart.dataSource = sampleData;
    }
}