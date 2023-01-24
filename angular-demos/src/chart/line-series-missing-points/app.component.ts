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

    sampleData = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];
    animation = 'none';
    caption = 'Line serie with missing points';
    description = 'Sample line serie with missing and invalid values';
    showLegend = true;
    padding = { left: 5, top: 5, right: 15, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        text: 'x',
        valuesOnTicks: false
    };
    colorScheme = 'scheme31';
    seriesGroups = [
        {
            type: 'line',
            toolTipFormatFunction: function (value, itemIndex) {
                return '<div style="text-align:left"><b>Index:</b> ' +
                    itemIndex + '<br /><b>Value:</b> ' +
                    value + '<br /></div>';
            },
            valueAxis: {
                title: { text: 'Value<br>' }
            },
            series: [
                { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
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
            if (that.chart.seriesGroups && that.chart.seriesGroups[0] && that.chart.seriesGroups[0].series && that.chart.seriesGroups[0].series[0]) {
                that.chart.seriesGroups[0].series[0].emptyPointsDisplay = event.detail.value;
                that.chart.update();
            }
        });
    }
}