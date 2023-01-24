import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [
        { year: 2006, population: 495.9e6 },
        { year: 2007, population: 498.3e6 },
        { year: 2008, population: 500.3e6 },
        { year: 2009, population: 502.09e6 },
        { year: 2010, population: 503.17e6 },
        { year: 2011, population: 504.49e6 },
        { year: 2012, population: 504.06e6 },
        { year: 2013, population: 505.17e6 },
        { year: 2014, population: 506.97e6 },
        { year: 2015, population: 508.5e6 },
        { year: 2016, population: 510.28e6 },
        { year: 2017, population: 511.81e6 },
        { year: 2018, population: 512.6e6 },
        { year: 'Total', summary: true }
    ];
    caption = 'EU Population between 2006 and 2018';
    description = 'data source: Eurostat';
    showLegend = false;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    colorScheme = 'scheme06';
    xAxis = {
        type: 'basic',
        dataField: 'year',
        displayText: 'Year',
        labels: { angle: 0 }
    };
    valueAxis = {
        minValue: 490e6,
        title: { text: 'Population (millions)<br>' },
        unitInterval: 2000000,
        labels: {
            formatFunction: function (value: number) {
                return value / 1000000 + ' M';
            }
        }
    };
    seriesGroups = [
        {
            type: 'waterfall',
            series: [
                {
                    dataField: 'population',
                    summary: 'summary',
                    displayText: 'Population change',
                    colorFunction: (value: number, itemIndex: number) => {
                        if (itemIndex === this.sampleData.length - 1) {
                            return '#00309A'; // total
                        }
                        return (value < 0) ? '#E06243' /* red */ : '#6CBC47' /*green*/;
                    }
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

        // convert raw data to differences
        for (var i = that.sampleData.length - 2; i > 0; i--) {
            that.sampleData[i].population -= that.sampleData[i - 1].population;
        }
    }
}