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
    caption = 'Large set of hourly data points';
    showLegend = true;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
    xAxis = {
        dataField: 'date',
        type: 'date',
        baseUnit: 'month',
        valuesOnTicks: true,
        unitInterval: 4,
        gridLines: {
            visible: true,
            unitInterval: 3,
            color: '#BCBCBC'
        },
        labels: {
            formatFunction(value) {
                return value.getMonth() + 1 + '/' + value.getFullYear();
            }
        }
    };
    valueAxis = {
        visible: true,
        tickMarks: { color: '#BCBCBC' },
        unitInterval: 100
    };
    colorScheme = 'scheme28';
    seriesGroups = [
        {
            type: 'line',
            series: [
                {
                    dataField: 'dataPoint', displayText: 'hourly data points'
                }
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

        let timestamp = new Date(new Date().getFullYear(), 0, 1).getTime();
        const sampleData = [{ date: new Date(timestamp), dataPoint: 20 }];
        for (let i = 0; i < 50000; i++) {
            let min: number,
                max: number,
                dataPoint: number;
            if (i % 14) {
                min = 5;
                max = 40;
            }
            else if (i % 7) {
                min = 100;
                max = 300;
            }
            else if (i % 3) {
                min = 100;
                max = 200;
            }
            else {
                min = 350;
                max = 500;
            }
            dataPoint = Math.round(Math.random() * (max - min) + min);
            if (i > 3500 && i < 5000) {
                dataPoint -= Math.round(Math.random() * 35 + 5);
            }
            else if (i > 11200 && i < 11700 && i % 3 === 0) {
                dataPoint += Math.round(Math.random() * 155 + 125);
            }
            else if (i > 16000 && i < 18000 || i > 22000 && i < 23000) {
                dataPoint += Math.round(Math.random() * 75 + 5);
            }
            else if (i >= 18000 && i <= 22000) {
                dataPoint += Math.round(Math.random() * 155 + 25);
            }
            timestamp += 3600000;
            sampleData.push({
                date: new Date(timestamp),
                dataPoint: dataPoint * Math.sin(i / 15)
            });
        }

        that.chart.dataSource = sampleData;
        that.chart.description = `(${sampleData[0].date.getFullYear()}-${sampleData[sampleData.length - 1].date.getFullYear()})`;
    }
}