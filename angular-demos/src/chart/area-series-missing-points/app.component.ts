import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

    sampleData = [
        { a: 25, b: 21 },
        { a: 28, b: 19 },
        { a: 35, b: undefined },
        { a: 29, b: NaN },
        { a: 38, b: 18 },
        { a: 36, b: 17 },
        { a: 31, b: 21 }
    ];
    animation = 'none';
    caption = 'Area series with missing points';
    description = 'Sample area series with missing and invalid values';
    showLegend = true;
    padding = { left: 5, top: 5, right: 15, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        text: 'x',
        valuesOnTicks: true
    };
    colorScheme = 'scheme30';
    seriesGroups = [
        {
            type: 'area',
            toolTipFormatFunction: function (value: number, itemIndex: number) {
                return '<div style="text-align:left"><b>Index:</b> ' +
                    itemIndex + '<br /><b>Value:</b> ' +
                    value + '<br /></div>';
            },
            valueAxis: {
                title: { text: 'Value<br>' }
            },
            series: [
                { dataField: 'a', lineWidth: 2, symbolSize: 8, symbolType: 'circle', opacity: 0.8 },
                { dataField: 'b', emptyPointsDisplay: 'skip', lineWidth: 2, symbolSize: 8, symbolType: 'diamond', opacity: 0.9 }
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

        that.dropdownlist.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0] && that.chart.seriesGroups[0].series) {
                that.chart.seriesGroups[0].series[1].emptyPointsDisplay = event.detail.value;
                that.chart.update();
            }
        });
    }
}