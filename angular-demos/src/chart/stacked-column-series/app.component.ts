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
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
        { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
        { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
    ];
    caption = 'Fitness & exercise weekly scorecard';
    description = 'Time spent in vigorous exercise by activity';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'Day',
        unitInterval: 1,
        axisSize: 'auto',
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        }
    };
    valueAxis = {
        unitInterval: 10,
        minValue: 0,
        maxValue: 120,
        title: { text: 'Time in minutes' },
        labels: { horizontalAlignment: 'right' },
        tickMarks: { color: '#BCBCBC' }
    };
    colorScheme = 'scheme29';
    seriesGroups = [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
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