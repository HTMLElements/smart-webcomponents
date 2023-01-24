import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;

    sampleData = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];
    caption = 'Fitness & exercise weekly scorecard';
    description = 'Time spent in vigorous exercise';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'Day',
        gridLines: {
            visible: true
        }
    };
    colorScheme = 'scheme29';
    seriesGroups = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                description: 'Time in minutes',
                axisSize: 'auto'
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
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

        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].useGradientColors = event.detail.value;
                that.chart.update();
            }
        });
    }
}