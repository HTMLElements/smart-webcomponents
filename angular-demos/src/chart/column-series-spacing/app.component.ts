import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3!: SliderComponent;
    @ViewChild('slider4', { read: SliderComponent, static: false }) slider4!: SliderComponent;
    @ViewChild('slider5', { read: SliderComponent, static: false }) slider5!: SliderComponent;
    @ViewChild('slider6', { read: SliderComponent, static: false }) slider6!: SliderComponent;
    @ViewChild('slider7', { read: SliderComponent, static: false }) slider7!: SliderComponent;
    @ViewChild('slider8', { read: SliderComponent, static: false }) slider8!: SliderComponent;

    sampleData = [
        { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
        { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
        { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
        { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
        { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
        { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
        { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
    ];
    animation = 'none';
    caption = 'Columns spacing and padding';
    description = 'Example with two series groups and three series in each group';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    columnSeriesOverlap = true;
    xAxis = {
        dataField: 'Position',
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        flip: false,
        valuesOnTicks: false
    };
    valueAxis = {
        unitInterval: 10,
        title: { text: 'Value' },
        tickMarks: { color: '#BCBCBC' },
        gridLines: { color: '#BCBCBC' },
        labels: {
            horizontalAlignment: 'right'
        }
    };
    colorScheme = 'scheme04';
    seriesGroups = [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 25,
            seriesGapPercent: 10,
            columnsMaxWidth: 40,
            columnsMinWidth: 1,
            skipOverlappingPoints: false,
            series: [
                { dataField: 'Serie1', displayText: 'Serie1' },
                { dataField: 'Serie2', displayText: 'Serie2' },
                { dataField: 'Serie3', displayText: 'Serie3' }
            ]
        },
        {
            type: 'column',
            greyScale: true,
            columnsGapPercent: 25,
            seriesGapPercent: 10,
            columnsMaxWidth: 40,
            columnsMinWidth: 1,
            skipOverlappingPoints: false,
            series: [
                { dataField: 'Serie4', displayText: 'Serie4' },
                { dataField: 'Serie5', displayText: 'Serie5' },
                { dataField: 'Serie6', displayText: 'Serie6' }
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

        that.checkbox.addEventListener('change', function () {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].type = that.checkbox.checked ? 'stackedcolumn' : 'column';
            }
        });
        that.checkbox2.addEventListener('change', function () {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1]) {
                that.chart.seriesGroups[1].type = that.checkbox2.checked ? 'stackedcolumn' : 'column';
            }
        });
        // columns spacing
        that.slider.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].columnsGapPercent = event.detail.value;
            }
        });
        that.slider2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1]) {
                that.chart.seriesGroups[1].columnsGapPercent = event.detail.value;
            }
        });
        // series spacing
        that.slider3.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].seriesGapPercent = event.detail.value;
            }
        });
        that.slider4.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1]) {
                that.chart.seriesGroups[1].seriesGapPercent = event.detail.value;
            }
        });
        // min column width
        that.slider5.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].columnsMinWidth = event.detail.value;
            }
        });
        that.slider6.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1]) {
                that.chart.seriesGroups[1].columnsMinWidth = event.detail.value;
            }
        });
        // max column width
        that.slider7.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].columnsMaxWidth = event.detail.value;
            }
        });
        that.slider8.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1]) {
                that.chart.seriesGroups[1].columnsMaxWidth = event.detail.value;
            }
        });
    }
}