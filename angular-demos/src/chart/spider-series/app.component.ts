import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent, ChartType, ChartColorScheme } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
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
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('dropdownlist2', { read: DropDownListComponent, static: false }) dropdownlist2!: DropDownListComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;

    sampleData = [
        {
            type: 'Organic Search',
            month1: 1725090,
            month2: 3136190
        },
        {
            type: 'Paid Search',
            month1: 925090,
            month2: 2136190
        },
        {
            type: 'Direct',
            month1: 425090,
            month2: 936190
        },
        {
            type: 'Referral',
            month1: 1250900,
            month2: 2536190
        },
        {
            type: 'Twitter',
            month1: 350900,
            month2: 681900
        },
        {
            type: 'Facebook',
            month1: 381900,
            month2: 831500
        }
    ];
    caption = 'Website audience acquision by source';
    description = 'Month over month comparison';
    animation = 'none';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };
    dataSource = this.sampleData;
    colorScheme = 'scheme05';
    xAxis = {
        dataField: 'type',
        displayText: 'Traffic source',
        valuesOnTicks: true,
        labels: { autoRotate: false }
    };
    valueAxis = {
        unitInterval: 1000000,
        labels: {
            formatSettings: { decimalPlaces: 0 },
            formatFunction: function (value, itemIndex, series, group) {
                return Math.round(value / 1000) + ' K';
            }
        }
    };
    seriesGroups = [
        {
            spider: true,
            startAngle: 0,
            endAngle: 360,
            radius: 120,
            type: 'spline',
            series: [
                { dataField: 'month1', displayText: 'January 2018', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                { dataField: 'month2', displayText: 'February 2018', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
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

        that.slider.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.seriesGroups && that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].startAngle = value;
                that.chart.seriesGroups[0].endAngle = value + 360;
                that.chart.update();
            }
        });
        that.slider2.addEventListener('change', function (event: CustomEvent) {
            if (!that.chart.seriesGroups) {
                return;
            }
            const value = parseFloat(event.detail.value);
            if (that.chart.seriesGroups[0]) {
                that.chart.seriesGroups[0].radius = value;
                that.chart.update();
            }
        });
        that.dropdownlist2.addEventListener('change', function () {
            that.chart.colorScheme = <ChartColorScheme>that.dropdownlist2.selectedValues[0];
        });
        that.dropdownlist.addEventListener('change', function () {
            if (!that.chart.seriesGroups) {
                return;
            }
            if (that.chart.seriesGroups[0]) {
                if (!that.dropdownlist.selectedValues) {
                    return;
                }
                that.chart.seriesGroups[0].type = <ChartType>that.dropdownlist.selectedValues[0];
                that.chart.update();
            }
        });
        document.getElementById('checkBoxAutoRotateLabels').addEventListener('change', function (event: CustomEvent) {
            if (!that.chart) {
                return;
            }
            if (that.chart.xAxis && that.chart.xAxis.labels) {
                that.chart.xAxis.labels.autoRotate = event.detail.value;
            }
            if (that.chart.valueAxis && that.chart.valueAxis.labels) {
                that.chart.valueAxis.labels.autoRotate = event.detail.value;
            }
        });
        document.getElementById('checkBoxTicksBetween').addEventListener('change', function (event: CustomEvent) {
            if (!that.chart || !that.chart.xAxis) {
                return;
            }
            that.chart.xAxis.valuesOnTicks = !event.detail.value;
        });
    }
}