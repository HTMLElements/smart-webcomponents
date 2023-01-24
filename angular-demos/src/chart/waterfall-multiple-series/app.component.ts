import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    seasonData = [
        { Episode: 1, Season1: 2220000, Season6: 7940000 },
        { Episode: 2, Season1: 2200000, Season6: 7290000 },
        { Episode: 3, Season1: 2440000, Season6: 7280000 },
        { Episode: 4, Season1: 2450000, Season6: 7820000 },
        { Episode: 5, Season1: 2580000, Season6: 7890000 },
        { Episode: 6, Season1: 2440000, Season6: 6710000 },
        { Episode: 7, Season1: 2400000, Season6: 7800000 },
        { Episode: 8, Season1: 2720000, Season6: 7600000 },
        { Episode: 9, Season1: 2660000, Season6: 7660000 },
        { Episode: 10, Season1: 3040000, Season6: 8890000 },
        { Episode: 'Total', summary: true, Season6: 0, Season1: 0 }
    ];
    caption = '"Game of Thrones" Viewership';
    description = 'Season 1 vs Season 6';
    showLegend = true;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.seasonData;
    xAxis = {
        type: 'basic',
        dataField: 'Episode',
        title: { text: 'Episode' },
        labels: { angle: 0 },
        valuesOnTicks: false,
    };
    valueAxis = {
        minValue: 2000000,
        title: { text: 'Viewership (millions)' },
        unitInterval: 500000,
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
                    dataField: 'Season1',
                    summary: 'summary',
                    displayText: 'Season 1',
                    colorFunction: (value: number, itemIndex: number) => {
                        if (itemIndex === this.seasonData.length - 1) {
                            return '#F7C71B'; // total
                        }
                        return (value < 0) ? '#FFBB84' : '#D8E24D';
                    }
                },
                {
                    dataField: 'Season6',
                    summary: 'summary',
                    displayText: 'Season 6',
                    colorFunction: (value: number, itemIndex: number) => {
                        if (itemIndex === this.seasonData.length - 1) {
                            return '#5993FF'; // total
                        }
                        return (value < 0) ? '#AF87FF' : '#8EDBFF';
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
        for (let i = that.seasonData.length - 2; i > 0; i--) {
            that.seasonData[i].Season1 -= that.seasonData[i - 1].Season1;
            that.seasonData[i].Season6 -= that.seasonData[i - 1].Season6;
        }
    }
}