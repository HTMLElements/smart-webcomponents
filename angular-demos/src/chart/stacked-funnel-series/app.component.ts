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
        { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
        { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
        { Index: '3', SerieA: 30, SerieB: 10, SerieC: 25 },
        { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
        { Index: '5', SerieA: 10, SerieB: 20, SerieC: 25 },
        { Index: '6', SerieA: 30, SerieB: 10, SerieC: 30 },
        { Index: '7', SerieA: 60, SerieB: 45, SerieC: 10 }
    ];
    caption = 'Stacked Funnel chart';
    description = 'This example demonstrates stacked funnel chart with positive and negative values';
    showLegend = true;
    padding = { left: 15, top: 15, right: 15, bottom: 15 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'Index',
        tickMarks: {
            visible: true,
            unitInterval: 1
        },
        gridLines: {
            visible: true,
            unitInterval: 1
        }
    };
    valueAxis = {
        labels: { horizontalAlignment: 'right' }
    };
    colorScheme = 'scheme32';
    seriesGroups = [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            columnsTopWidthPercent: 100,
            columnsBottomWidthPercent: 30,
            series: [
                { dataField: 'SerieA', displayText: 'Serie A', labels: { visible: true } },
                { dataField: 'SerieB', displayText: 'Serie B', labels: { visible: true } },
                { dataField: 'SerieC', displayText: 'Serie C', labels: { visible: true } }
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