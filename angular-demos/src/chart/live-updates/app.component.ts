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
    caption = 'Live updates performance';
    description = 'Data changes every ' + 10 + ' milliseconds';
    showLegend = true;
    padding = { left: 10, top: 10, right: 10, bottom: 10 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    xAxis = {
        dataField: 'key',
        unitInterval: 1,
        valuesOnTicks: true,
        gridLines: { visible: false }
    };
    valueAxis = {
        minValue: 0,
        maxValue: 750,
        title: { text: 'Index Value<br>' }
    };
    colorScheme = 'scheme32';
    seriesGroups = [
        {
            type: 'line',
            useGradientColors: false,
            series: [
                { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle' }
            ]
        },
        {
            type: 'spline',
            useGradientColors: false,
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'value2', displayText: 'value2' }
            ]
        },
        {
            type: 'column',
            useGradientColors: false,
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'value3', displayText: 'value3' }
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
        const that = this,
            data: { key: number, value1: number, value2: number, value3: number }[] = [];

        for (let i = 0; i < 20; i++) {
            data.push({
                key: i,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200
            });
        }

        that.chart.dataSource = data;

        const timerFunction = function () {
            data.splice(0, 1);
            data.push({
                key: data[data.length - 1].key + 1,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200
            });
            that.chart.update();
        };

        setInterval(timerFunction, 10);
    }
}