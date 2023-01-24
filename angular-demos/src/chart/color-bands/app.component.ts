import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    data = [
        { Person: 'Planning', M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
        { Person: 'Dev 1', M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
        { Person: 'Dev 2', M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
        { Person: 'QA 1', M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 }
    ];
    toolTipCustomFormatFn = function (value: { from: number, to: number }, itemIndex: number, serie, group, xAxisValue, xAxis): string {
        return `<div style="text-align: left;">
                    <strong>Team: ${xAxisValue}</strong>
                    <br />Start day: ${value.from}
                    <br />End day: ${value.to}
                </div>`;
    };
    caption = 'Monthly Project Schedule';
    description = 'Website update plan';
    showLegend = true;
    padding = { left: 5, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.data;
    xAxis = {
        dataField: 'Person',
        unitInterval: 1,
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        }
    };
    colorScheme = 'scheme32';
    seriesGroups = [
        {
            orientation: 'horizontal',
            type: 'rangecolumn',
            columnsGapPercent: 100,
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            valueAxis: {
                flip: true,
                minValue: 1,
                maxValue: 30,
                unitInterval: 1,
                title: { text: 'Day' },
                tickMarks: { color: '#BCBCBC' }
            },
            series: [
                { dataFieldFrom: 'M1_From', dataFieldTo: 'M1_To', displayText: 'Sprint 1', opacity: 1 },
                { dataFieldFrom: 'M2_From', dataFieldTo: 'M2_To', displayText: 'Sprint 2', opacity: 1 }
            ],
            bands: [
                { minValue: 13, maxValue: 16, color: '#00FF00', opacity: 0.15 },
                { minValue: 24, maxValue: 27, color: '#FFBC70', opacity: 0.20 },
                { minValue: 29, maxValue: 29, color: '#FF0000', opacity: 0.5, lineWidth: 3 }
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