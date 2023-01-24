import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent, ChartSeriesGroup, ChartXAxis } from 'smart-webcomponents-angular/chart';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('dropdownlist2', { read: DropDownListComponent, static: false }) dropdownlist2!: DropDownListComponent;

    animation = "none";
    clip = false;
    caption = 'Height of 100 Random Adolescents';
    description = 'between ages 13 and 20';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    colorScheme = 'scheme32';
    xAxis = {
        dataField: 'Age',
        valuesOnTicks: false,
        type: 'linear',
        unitInterval: 1,
        minValue: 13,
        maxValue: 20
    };
    valueAxis = {
        title: { text: 'Height (cm)' },
        minValue: 140,
        maxValue: 185
    };

    symbols = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

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
            averages = [
                { Age: 13, Male: 156.2, Female: 156.7 },
                { Age: 14, Male: 163.8, Female: 158.7 },
                { Age: 15, Male: 170.1, Female: 159.7 },
                { Age: 16, Male: 173.4, Female: 162.5 },
                { Age: 17, Male: 175.2, Female: 162.5 },
                { Age: 18, Male: 175.7, Female: 163 },
                { Age: 19, Male: 176.5, Female: 163 },
                { Age: 20, Male: 177, Female: 163.3 }
            ],
            maleData = [],
            femaleData = [],
            toolTipFormatFunction = function (value, iidx, series, group, xAxisValue, xAxis) {
                const months = new Number(xAxisValue % 1 * 12);
                return `<strong>Gender:</strong> ${series.displayText.slice(0, series.displayText.length - 1)}
    <br />
    <strong>Height:</strong> ${value} cm
    <br />
    <strong>Age:</strong> ${parseInt(xAxisValue)} years ${months > 0 ? 'and ' + months + ' months' : ''}`;
            };

        for (let i = 0; i < 200; i++) {
            let gender = i % 2 === 0 ? 'Male' : 'Female', age = Math.min(Math.random() * 7 + 13, 20), averageHeight = averages[Math.round(age) - 13][gender], height = Math.random() * 25 + averageHeight - 12.5;
            if (gender === 'Male') {
                maleData.push({ Age: age, Height: parseFloat(height.toFixed(1)) });
            }
            else {
                femaleData.push({ Age: age, Height: parseFloat(height.toFixed(1)) });
            }
        }

        that.chart.seriesGroups = [
            {
                type: 'scatter',
                dataSource: maleData,
                series: [
                    { dataField: 'Height', symbolSize: 20, symbolType: 'circle', displayText: 'Boys', toolTipFormatFunction: toolTipFormatFunction }
                ]
            },
            {
                type: 'scatter',
                dataSource: femaleData,
                series: [
                    { dataField: 'Height', symbolSize: 20, symbolType: 'diamond', displayText: 'Girls', toolTipFormatFunction: toolTipFormatFunction }
                ]
            }
        ];

        that.dropdownlist.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[0] && that.chart.seriesGroups[0].series) {
                that.chart.seriesGroups[0].series[0].symbolType = event.detail.value;
                that.chart.refresh();
            }
        });
        that.dropdownlist2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.seriesGroups && that.chart.seriesGroups[1] && that.chart.seriesGroups[1].series) {
                that.chart.seriesGroups[1].series[0].symbolType = event.detail.value;
            }
            that.chart.refresh();
        });
    }
}