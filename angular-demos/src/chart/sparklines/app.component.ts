import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ChartComponent, Chart, Smart, ChartXAxisType, ChartType } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('tbody', { read: ElementRef, static: false }) tbody!: ElementRef;

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
            sampleData = [
                { city: 'London', count: 24, monthlySales: 1128430, dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8] },
                { city: 'New York', count: 35, monthlySales: 1434650, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
                { city: 'Berlin', count: 11, monthlySales: 498430, dailyTrend: [11, 5, 8, 20, 23, 17, 6, 18, 6, 18, 15, 8, 13, 12, 20, 14, 13, 3, 23, 4, 14, 21, 15, 7, 4, 9, 22, 16, 3, 1] },
                { city: 'Madrid', count: 4, monthlySales: 181760, dailyTrend: [2, 5, 15, 17, 20, 10, 15, 21, 6, 8, 14, 2, 4, 10, 6, 18, 11, 20, 12, 14, 14, 22, 21, 10, 20, 1, 18, 12, 5, 23] },
                { city: 'Paris', count: 9, monthlySales: 381760, dailyTrend: [15, 19, 15, 13, 17, 21, 3, 8, 8, 13, 8, 21, 19, 8, 8, 22, 3, 12, 18, 14, 15, 6, 15, 17, 14, 1, 14, 3, 8, 15] },
            ],
            positiveColor = getComputedStyle(document.documentElement).getPropertyValue('--smart-primary').trim(),
            negativeColor = getComputedStyle(document.documentElement).getPropertyValue('--smart-error').trim();

        function createSparkline(element: Chart, index: number) {
            let type: ChartType;
            if (index % 2 === 0) {
                type = 'column';
            }
            else if (index === 3) {
                type = 'area';
            }
            else {
                type = 'stepline';
            }
            const settings = {
                caption: '',
                description: '',
                showLegend: false,
                animation: 'none',
                showBorderLine: false,
                showToolTips: false,
                backgroundColor: 'transparent',
                padding: { left: 0, top: 0, right: 0, bottom: 0 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
                dataSource: sampleData[index].dailyTrend,
                xAxis: {
                    visible: false,
                    valuesOnTicks: false
                },
                seriesGroups: [
                    {
                        type: type,
                        columnsGapPercent: 0,
                        columnsMaxWidth: 2,
                        valueAxis: {
                            minValue: 0,
                            visible: false
                        },
                        series: [
                            {
                                linesUnselectMode: 'click',
                                colorFunction: function (value: number, itemIndex, serie, group) {
                                    return (value < 10) ? negativeColor : positiveColor;
                                }
                            }
                        ]
                    }
                ]
            };
            for (let setting in settings) {
                element[setting] = settings[setting];
            }
        }

        sampleData.forEach(function (dataPoint, index) {
            const tr = document.createElement('tr');
            for (let field in dataPoint) {
                const td = document.createElement('td');
                if (field !== 'dailyTrend') {
                    td.innerHTML = dataPoint[field];
                }
                else {
                    const sparkLine = document.createElement('smart-chart');
                    createSparkline(sparkLine, index);
                    td.appendChild(sparkLine);
                }
                tr.appendChild(td);
            }

            that.tbody.nativeElement.appendChild(tr);
        });

        Smart.Render();
    }
}